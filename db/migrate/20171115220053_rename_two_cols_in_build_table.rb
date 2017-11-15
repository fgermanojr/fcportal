class RenameTwoColsInBuildTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :builds, :date_file_contents, :dat_file_contents
  end
end
