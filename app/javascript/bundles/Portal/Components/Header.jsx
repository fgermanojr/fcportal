import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js';

export default class Header extends React.Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { version: this.props.version };
  }

  updateVersion = (version) => {
    this.setState({ version });
  };

  render() {
    var s = myStyles.Styles;
    return (
      <tr id="header" style={s.headerStyle}>
        <td style={s.fontSizeStyle}>&emsp;Fortran Calculus Portal</td>
        <td><span id="date-span">{new Date().toLocaleTimeString()} </span>
            <span id="header-username">{this.props.username}</span>
            <span id="help-btn" style={s.helpbtnStyle}><b>HELP</b></span>
        </td>
      </tr>
    );


  }
}