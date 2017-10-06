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
        STATUS{this.props.notification}
      </div>
    );


  }
}