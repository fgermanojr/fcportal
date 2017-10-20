class SubmissionsController < ApplicationController
  def submit
    puts submission_params.inspect
  end

  private

  def submission_params
    params.fetch(:submission, {}).permit(:userName, :modelName, :fc_file, :dat_file, :checkBoxMap, :checkBoxBuild, :checkBoxRun, :checkBoxRtnFile)
  end
end
