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

const domainspanStyle = {
  float: 'right'
}

export default class Footer extends React.Component {
  static propTypes = { // *** finish
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };  // fgj change this later
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <tr id="footer">
        <td>
          <span>&emsp;Frank Germano, Jr.</span>
        </td>
        <td>
          <span id="email-span">fgermano@earthlink.net</span>
          <span id="domain-span" style={domainspanStyle}>www.fortrancalculus.com </span>
        </td>
      </tr>
    );


  }
}