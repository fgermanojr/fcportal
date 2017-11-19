class AddUserNameANdModelNameAndBuildIdToRunTable < ActiveRecord::Migration[5.1]
  def change
    add_column :runs, :username, :string
    add_column :runs, :modelname, :string
  end
end
