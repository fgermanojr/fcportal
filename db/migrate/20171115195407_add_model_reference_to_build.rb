class AddModelReferenceToBuild < ActiveRecord::Migration[5.1]
  def change
    add_reference :builds, :model, foreign_key: true
  end
end
