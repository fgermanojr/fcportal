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

    verify_user(portal_worker_parameters)# be sure, user exists.
    verify_model(portal_worker_parameters) # be sure, model exists.
    establish_build(portal_worker_parameters) # store a build.
    # store the build for each model; each iteration is saved.
    # plan to only use the last, on runs. Should I just keep the last build ???
    create_job(portal_worker_parameters)
    job_id = @job.id

    portal_worker_parameters[:job_id] = job_id # Add job id to parameter block.

    Build.update(@build.id, job_id: job_id) # Add job id to the build.

    # Should add build id, if i am keeping all of them ???
    PortalWorker.perform_later(portal_worker_parameters) # Now in the portal queue

    # Tell front-end status is enqueued. The worker will also update the start and finish status.
    ActionCable.server.broadcast "submissions_channel", {message: 'enqueued', job_id: job_id}

    render json: {result: 'submitted', job_id: job_id}.to_json
    # TBD.  not checking this response in front end;
    # should, and display job_id
  end

  private

  # these should go in models.  FIX  **********
  def verify_user(pwp)
    @user = User.find_by(username: pwp[:userName]) # turn into scope.
  end

  def verify_model(pwp)
    @model = Model.find_by(modelname: pwp[:modelName])
    unless @model
      @model = @user.models.create(modelname: pwp[:modelName], description: '')
      @model.save!
    end
    @model
  end

  def establish_build(pwp)
    @build = @model.builds.create(
      fc_file_name: pwp[:fcFile],
      fc_file_contents: pwp[:fcFileContents],
      dat_file_name: pwp[:datFile],
      dat_file_contents: pwp[:datFileContents],
      job_id: nil, # will be updated once available, upon creation of job
      ck_create_map: pwp[:checkBoxMap],
      ck_build_model: pwp[:checkBox],
      ck_run_model: pwp[:checkBoxRun],
      ck_return_results: pwp[:checkBoxRtnFile],
      build_status: nil # will be updated once available, upon build completion
    )
  end

  def create_job(pwp)
    # The job is used to track a unit of work; it belongs to a build or a run

    # @build.run.runable = @build FAILING . trying optional route.
    # XXX @build.run.runable = @build # NOTE. A work-around for a bug in rails 5.x.
    # See jarlorey.com article on Polymorthic associations. Rails recently
    # changed to always require the owner to exist, but somehow internally does
    # not set the owner. You can also, on the children, make
    # belongs_to, ....,  optional: true, however, this violates the spirit of
    # what is going on; the owner is required.
    @job = Job.create(build_id: @build.id, server_name: '', queue_name: '',
                      job_state: 1, dt_enqueued: Time.now.utc)  # watch out for time zone issues.
  end

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
