class PortalWorker < ActiveJob::Base
  # TO START WORKER bundle exec rake environment resque:work QUEUE=portal_worker
  # TBD figure out how to do at startup in background.

  queue_as :portal_worker

  def perform(portal_worker_parameters)
    # logger.info 'worker hit'
    puts portal_worker_parameters.inspect
    # add parameter: COMMAND: build, run
    # SPAWN JOB
    # LOG job start, return id info
    job_id = '12345'
    ActionCable.server.broadcast "submissions_channel", {message: 'started', job_id: job_id}
      sleep 10
    ActionCable.server.broadcast "submissions_channel", {message: 'completed', job_id: job_id}
    # LOG success, send notification to client
    # LOG failure, send notification to client

  end

  private

  def spawn_job(*params)

  end
end