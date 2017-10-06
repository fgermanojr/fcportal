class BroadcastController < ApplicationController
  def broadcast
    # ActionCable.server.broadcast 'notification_channel', message: {status: status}
    # render :nothing => true
  end
end
