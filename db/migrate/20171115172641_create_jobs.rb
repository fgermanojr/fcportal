class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string    :server_name
      t.string    :queue_name
      t.integer   :job_state
      t.datetime  :dt_enqueued
      t.datetime  :dt_started
      t.datetime  :dt_ended
      t.integer   :completion_status
      t.timestamps
    end
  end
end
