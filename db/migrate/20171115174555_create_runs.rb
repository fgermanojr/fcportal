class CreateRuns < ActiveRecord::Migration[5.1]
  def change
    create_table :runs do |t|
      t.integer     :run_status
      t.timestamps
    end
  end
end
