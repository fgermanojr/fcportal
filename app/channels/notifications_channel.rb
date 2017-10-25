class NotificationsChannel < ApplicationCable::Channel
  # THIS IS NOT USED remove
  # Called when the consumer has successfully
  # bedome a subdscriber of this channel
  def subscribed
    stream_from "notifications_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
