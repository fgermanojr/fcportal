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
      fcFileContents: read_file(submission_params[:fcFile]),
      datFileContents: read_file(submission_params[:datFile])
    }
    # Resque.enqueue(PortalWorker, portal_worker_parameters )
    PortalWorker.perform_later(portal_worker_parameters)
    ActionCable.server.broadcast 'submissions_channel', message: 'enqueued'

       # create job_id to mimic bear's run id
    render json: {result: 'submitted', job_id: '12345'}.to_json
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
