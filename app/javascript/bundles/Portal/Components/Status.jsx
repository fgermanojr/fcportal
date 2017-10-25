// not used at present. see system status.
import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js'; //not used

export default class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var s = myStyles.Styles;
    return (
      <div id="status">
        STATUS {this.props.notification}
      </div>
    );
  }

  componentDidMount() {
    this.setupSubscription();
  }


  setupSubscription() {

    // App.notification = App.cable.subscriptions.create("NotificationChannel", {
    //   connected: function() {
    //     // Called when the subscription is ready for use on the server
    //   },

    //   disconnected: function() {
    //     // Called when the subscription has been terminated by the server
    //   },

    //   received: function(data) {
    //     // Called when there is incoming data on the websocket for this channel
    //     this.updateStatus(data.status)
    //   }
    // })
  }

  // updateStatus: this.updateStatus


  updateStatus(status) {
    this.setState({status: status});
  };
}
