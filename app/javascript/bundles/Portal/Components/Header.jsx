import PropTypes from 'prop-types';
import React from 'react';

// Inline styles
const tableStyle = {
  border: '1px solid black',
  width: '100%'
}

const headerStyle = {
  fontSize: '1.2em'
}

const borderStyle = {
  border: '1px solid black'
}

const sidebarStyle = {
  border: '1px solid black',
  width: '20%'
}

const viewportStyle = {
  border: '1px solid black',
  textAlign: 'center'
}

const fontSizeStyle = {
  color: 'blue',
}

const helpbtnStyle = {
  float: 'right'
}

export default class Header extends React.Component {
  static propTypes = { // *** finish
    version: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { version: this.props.version };  // fgj change this later
  }

  updateVersion = (version) => {
    this.setState({ version });
  };

  render() {
    return (
      <tr id="header" style={headerStyle}>
        <td style={fontSizeStyle}>&emsp;Fortran Calculus Portal</td>
        <td><span id="date-span">{new Date().toLocaleTimeString()} </span>
        <span id="help-btn" style={helpbtnStyle}><b>HELP</b></span></td>
      </tr>
    );


  }
}