class AddRunReferenceToJob < ActiveRecord::Migration[5.1]
  def change
    add_reference :jobs, :run, foreign_key: true
  end
end
