import PropTypes from 'prop-types';
import React from 'react';
import ActionCable from 'actioncable';

import * as myStyles from './Styles.js'; //not used

export default class SubmissionStatus extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { message: this.props.message };
    this.subscribeSubmissionChannel();
  }

  updateSubmissionStatus = (status) => {
    this.setState({ message: status });
  }

  subscribeSubmissionChannel = () => {
    // Thanks Artur Chmaro for this example and key step of yarn add actioncable
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable'); //CANT be right in production
    cable.subscriptions.create('SubmissionsChannel', {
      received: (data) => {
        this.updateSubmissionStatus(data.message);
      }
    });
  }

  render() {
    var s = myStyles.Styles;
    return (
      <span id="submission_status">
        STATUS {this.state.message}
      </span>
    );
  }
}
