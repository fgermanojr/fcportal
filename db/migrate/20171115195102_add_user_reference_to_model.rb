class AddUserReferenceToModel < ActiveRecord::Migration[5.1]
  def change
    add_reference :models, :user, foreign_key: true
  end
end
