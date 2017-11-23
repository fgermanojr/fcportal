import PropTypes from 'prop-types';
import React from 'react';
import ActionCable from 'actioncable'; // This is important and not obvious

import * as myStyles from './Styles.js';

export default class SystemStatus extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { message: this.props.message };
    this.subscribeChannel();
  }

  updateSystemStatus = (status) => {
    this.setState({ message: status });
  }

  subscribeChannel = () => {
    // Thanks Artur Chmaro for this example and key step of yarn add actioncable
    const cable = ActionCable.createConsumer('/cable');
    // With local host; only clients on this machine (multiple browsers can be notificed)
    // Later with chat channel, its crateConsomer, will use cloud server.
    cable.subscriptions.create('WebNotificationsChannel', {
      received: (data) => {
        this.updateSystemStatus(data.message);
      }
    });
  }


  render() {
    var s = myStyles.Styles;

    return (
      <span className="system_status">
        {this.state.message}
      </span>
    );
  }
}