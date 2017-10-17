import PropTypes from 'prop-types';
import React from 'react';
import ActionCable from 'actioncable';

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
    console.log('subscribe');
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable');
    cable.subscriptions.create('WebNotificationsChannel', {
      received: (data) => {
        console.log('received'+data.message);
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