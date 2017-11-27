import PropTypes from 'prop-types';
import React from 'react';
import SystemStatus from './SystemStatus'
import * as myStyles from './Styles.js';

export default class Header extends React.Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    is_logged_in: PropTypes.string.IsRequired,
    status: PropTypes.string.IsRequired,
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
        <td>
            <span id="header-username">{this.props.username + ' ' + this.props.is_logged_in}</span>
            <SystemStatus message={this.props.status} />
            <span id="help-btn" style={s.helpbtnStyle}><b>HELP</b></span>
        </td>
      </tr>
    );


  }
}