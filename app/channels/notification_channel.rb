class NotificationChannel < ApplicationCable::Channel
    stream_from "notification_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
