// put this in function in status object to set up this channel. then this
// will refer to that components updateStatus
App.notification = App.cable.subscriptions.create "NotificationChannel", {
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) -> {
    # Called when there is incoming data on the websocket for this channel
       this.updateStatus(data.status)
   }

   updateStatus: this.updateStatus

};