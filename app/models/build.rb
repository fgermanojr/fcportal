class Build < ApplicationRecord
  belongs_to :model, foreign_key: "model_id"
  has_one :job, as: :runable

  def self.establish(u, m, pwp)
    @build = Build.create!(model_id: m.id,
      username: u.username, modelname: m.modelname,
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
end