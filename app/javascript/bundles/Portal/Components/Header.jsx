import PropTypes from 'prop-types';
import React from 'react';

// Inline styles
const tableStyle = {
  border: '1px solid black',
  width: '100%'
}

const headerStyle = {
  color: 'blue',
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
        <td>
        Fortran Calculus Portal
        </td>
        <td>
        
        </td>
      </tr>
    );


  }
}