import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js'; //not used

export default class Chat extends React.Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { model: this.props.model };
  }

  updateName = (model) => {
    this.setState({ model });
  };

  render() {
    var s = myStyles.Styles;
    return (
      <div id="chat">
        <a href="/messages/index">chat container</a>
      </div>
    );


  }
}