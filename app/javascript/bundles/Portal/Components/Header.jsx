import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js';

// // Inline styles
// const tableStyle = {
//   border: '1px solid black',
//   width: '100%'
// }

// const headerStyle = {
//   fontSize: '1.2em'
// }

// const borderStyle = {
//   border: '1px solid black'
// }

// const sidebarStyle = {
//   border: '1px solid black',
//   width: '20%'
// }

// const viewportStyle = {
//   border: '1px solid black',
//   textAlign: 'center'
// }

// const fontSizeStyle = {
//   color: 'blue',
// }

// const helpbtnStyle = {
//   float: 'right'
// }

export default class Header extends React.Component {
  static propTypes = {
    version: PropTypes.string.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   */
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
        <span id="help-btn" style={s.helpbtnStyle}><b>HELP</b></span></td>
      </tr>
    );


  }
}