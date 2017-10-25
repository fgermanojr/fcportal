class SubmissionsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "submissions_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
