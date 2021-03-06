class SubmissionsController < ApplicationController
  def submit
    # just saving files for test; need to figure out where to store;
    # thinking just put in database; build stores the files in database;
    # stores for temp use by build process; builds; puts results files into database;
    # return result html to user.

    # save_file(submission_params[:fcFile])
    # puts submission_params[:datFile].inspect
    # save_file(submission_params[:datFile]) unless submission_params[:datFIle].nil?

    # set up job in database; enqueue job
    # we return once we submit; the worker will update the job status when it starts the job.

    portal_worker_parameters = {
      userName: submission_params[:userName],
      modelName: submission_params[:modelName],
      checkBoxMap: submission_params[:checkBoxMap],
      checkBoxBuild: submission_params[:checkBoxBuild],
      checkBoxRun: submission_params[:checkBoxRun],
      checkBoxRtnFile: submission_params[:checkBoxRtnFile],
      fcFile: submission_params[:fcFile].original_filename,
      datFile: submission_params[:datFile].nil? ? '' : submission_params[:datFile].original_filename,
      fcFileContents: read_file(submission_params[:fcFile]),
      datFileContents: read_file(submission_params[:datFile])
    }

    # be sure, user exists.
    @user = User.verify(portal_worker_parameters[:userName])

    # be sure, model exists.
    @model = Model.verify(@user, portal_worker_parameters)

    # store a build.
    @build = Build.establish(@user, @model, portal_worker_parameters)
    # store the build for each model; each iteration is saved.
    # plan to only use the last, on runs. Should I just keep the last build ???
  # is @build defined. ???

    # create the job record for tracking
    job_state = 1 # enqueued. # FIX use enum.
    @job = Job.establish(@build, job_state, portal_worker_parameters)
    job_id = @job.id

    portal_worker_parameters[:job_id] = job_id # Add job id to parameter block.

    Build.update(@build.id, job_id: job_id) # Add job id to the build.

    # Should add build id, if i am keeping all of them ???
    PortalWorker.perform_later(portal_worker_parameters) # Now in the portal queue

    # Tell front-end status is enqueued. The worker will also update the start and finish status.
    ActionCable.server.broadcast "submissions_channel", {message: 'enqueued', job_id: job_id}

    render json: {result: 'submitted', job_id: job_id}.to_json
  end

  private



  def submission_params
    params.permit(:userName, :modelName, :fcFile, :datFile, :checkBoxMap,
            :checkBoxBuild, :checkBoxRun, :checkBoxRtnFile, :authenticity_token)
  end

  def read_file(file_data)
    file_data.nil? ? nil : File.read(file_data.path)
    # TBD do some post processing filtering and cleanup
  end

  def save_file(file_data) # not used
    directory = '/tmp' #  WHERE ?
    path = File.join(directory, file_data.original_filename)
    File.open(path, "w") { |f| f.write(File.read(file_data.path)) }
  end
end
