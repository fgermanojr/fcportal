class CreateBuilds < ActiveRecord::Migration[5.1]
  def change
    create_table :builds do |t|
      t.string :fc_file_name
      t.text :fc_file_contents
      t.string :dat_file_name
      t.text :date_file_contents
      t.string :job_id
      t.integer :ck_create_map
      t.integer :ck_build_model
      t.integer :ck_run_model
      t.integer :ck_return_results
      t.integer  :build_status
      t.timestamps
    end
  end
end
