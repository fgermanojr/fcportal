import PropTypes from 'prop-types';
import React from 'react';
//import ActionCable from 'actioncable'; // This is important and not obvious

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
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable'); //TBD CANT be right in production
    // where can I get job ID. it is created on server if I use database job id.
    // it can come back in the submission json response. do both ID's ???
    // should i use user+model_bearrunid ??, create on client ???
    cable.subscriptions.create({ channel: 'SubmissionsChannel', job_id: '12345' } , {
      received: (data) => {
        this.updateSubmissionStatus(data.message + data.job_id);
      }
    })
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
