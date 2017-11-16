class ChangeDtEndedtoDtCompletedInTableJobs < ActiveRecord::Migration[5.1]
  def change
    rename_column :jobs, :dt_ended, :dt_completed
  end
end
