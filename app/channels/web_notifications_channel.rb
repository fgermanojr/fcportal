class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    puts 'subscribed '
    stream_from "web_notifications_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
