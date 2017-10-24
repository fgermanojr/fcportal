class PortalWorker < ActiveJob::Base
  # TO START WORKER bundle exec rake environment resque:work QUEUE=portal_worker
  # TBD figure out how to do at startup in background.
  # @queue = :portal_worker
  queue_as :portal_worker

  def perform(portal_worker_parameters)
    logger.info 'worker hit'
    puts portal_worker_parameters.inspect
    # add parameter: COMMAND: build, run

    # SPAWN JOB
    # LOG job start, return id info
    ActionCable.server.broadcast 'web_notifications_channel', message: 'started'
    # logger.info portal_worker_parameters['modelName']
    # logger.info 'sleeping 6'
    sleep 15
    ActionCable.server.broadcast 'web_notifications_channel', message: 'completed'

    # LOG success, send notification to client
    # LOG failure, send notification to client

  end

  private

  def spawn_job(*params)

  end
end