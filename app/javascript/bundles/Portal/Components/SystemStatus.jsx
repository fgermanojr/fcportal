import PropTypes from 'prop-types';
import React from 'react';
import ActionCable from 'actioncable'; //This was important.

import * as myStyles from './Styles.js';

export default class SystemStatus extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { message: this.props.message };
    this.subscribeChannel();
  }

  updateSystemStatus = (status) => {
    console.log(status);
    this.setState({ message: status });
  }

  subscribeChannel = () => {
    console.log('subscribed to web notifications channel');
    // Thanks Artur Chmaro for this example and key step of yarn add actioncable
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable'); //CANT be right in production
    cable.subscriptions.create('WebNotificationsChannel', {
      received: (data) => {
        console.log('received wn'+data.message);
        this.updateSystemStatus(data.message);
      }
    });
  }

  render() {
    var s = myStyles.Styles;

    return (
      <span className="system_status">
        { this.state.message }
      </span>
    );
  }
}