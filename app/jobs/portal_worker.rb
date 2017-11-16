class PortalWorker < ActiveJob::Base
  # Note. TO START WORKER
  # bundle exec rake environment resque:work QUEUE=portal_worker

  # TBD figure out how to do at startup in background.

  queue_as :portal_worker

  def perform(portal_worker_parameters)
    # logger.info 'worker hit'
    puts portal_worker_parameters.inspect
      # userName
      # modelName
      # checkBoxMap
      # checkBoxBuild
      # checkBoxRun
      # checkBoxRtnFile
      # fcFile
      # datFile
      # fcFileContents
      # datFileContents
      # job_id

    # add parameter: COMMAND: build, run

    job_id = portal_worker_parameters[:job_id]
puts job_id
# is logger, @logger defined?
    logger.info("Started Job ID #{job_id.to_s}")

    job_state = 2 # started
    @job = Job.establish(nil, job_state, portal_worker_parameters)
    ActionCable.server.broadcast "submissions_channel", {message: 'started', job_id: job_id}
      # WORK WORK WORK
      sleep 10 # working hard.
      # WORK WORK WORK

    job_state = 3 # completed
    @job = Job.establish(nil, job_state, portal_worker_parameters)
    ActionCable.server.broadcast "submissions_channel", {message: 'completed', job_id: job_id}

    # LOG success, send notification to client
    # LOG failure, send notification to client
  end

  private
  # create the files, set up the build or run command, spawn that command,
  # collect the results, return a response to the user. The broadcast could
  # include the html for the ResultArea, or a link to it, and it can be pulled
  # from the server. DO return in html, i think

  def create_files_for_run

  end

  def pack_files_from_run
    # can I zip them? can I send a zip file back to client?
    # let him review them locally? can I write to his disk?
    # can email back.
    # send an html file back with embedded links, so the files need to exist in the
    # server tree, or follow a link elsewhere in FileSystem.
    # Can I do this on mac and in cloud? Store them on S3 or equivalent?
  end

  def spawn_job(*params)

  end
end