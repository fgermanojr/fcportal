class RenameColumnModelNameInTableModelToModelname < ActiveRecord::Migration[5.1]
  def change
    rename_column :models, :model_name, :modelname
  end
end
