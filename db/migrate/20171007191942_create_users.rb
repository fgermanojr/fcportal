class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest
      t.string :email, null: false
      t.boolean :is_admin

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
