class AddBuildReferenceToJob < ActiveRecord::Migration[5.1]
  def change
    add_reference :jobs, :build, foreign_key: true
  end
end
