class NotificationChannel < ApplicationCable::Channel
    stream_from "notification_channel"
  end

  # Called when the consumer has successfully
  # bedome a subdscriber of this channel
  def subscribed
    stream_from "notification_#{params[:model]}"

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
