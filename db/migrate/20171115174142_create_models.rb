class CreateModels < ActiveRecord::Migration[5.1]
  def change
    create_table :models do |t|
      t.string :model_name
      t.text :description
      t.timestamps
    end
  end
end
