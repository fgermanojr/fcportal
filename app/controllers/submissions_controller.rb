class SubmissionsController < ApplicationController
  def submit
    puts submission_params.inspect

    save_file(submission_params[:fcFile])
    puts submission_params[:datFile].inspect
    save_file(submission_params[:datFile]) unless submission_params[:datFIle].nil?

    # set up job in database; enqueue job
    # we return once we submit; the worker will update the job status when it starts the job.


    render json: {result: 'submitted', job_id: '12345'}.to_json
  end

  private

  def submission_params
    params.permit(:userName, :modelName, :fcFile, :datFile, :checkBoxMap,
            :checkBoxBuild, :checkBoxRun, :checkBoxRtnFile, :authenticity_token)
  end

  def save_file(file_data)

    directory = '/tmp' #  WHERE ?
    path = File.join(directory, file_data.original_filename)
    File.open(path, "w") { |f| f.write(File.read(file_data.path)) }
  end
end
