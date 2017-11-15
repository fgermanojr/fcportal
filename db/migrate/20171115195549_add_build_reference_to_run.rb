class AddBuildReferenceToRun < ActiveRecord::Migration[5.1]
  def change
    add_reference :runs, :build, foreign_key: true
  end
end
