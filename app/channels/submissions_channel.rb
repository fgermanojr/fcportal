class SubmissionsChannel < ApplicationCable::Channel
  def subscribed
    job_id='12345' # need to pass this in; something unique === user/model/run
    # could use id from job model.
    stream_from "submissions_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
