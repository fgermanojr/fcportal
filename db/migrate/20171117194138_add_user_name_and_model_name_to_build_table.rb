class AddUserNameAndModelNameToBuildTable < ActiveRecord::Migration[5.1]
  def change
    add_column :builds, :username, :string
    add_column :builds, :modelname, :string
  end
end
