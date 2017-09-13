import PropTypes from 'prop-types';
import React from 'react';

// Inline styles
const listStyle = {
  listStyleType: 'none',
  textAlign: 'center'
}

const menuStyle = {
  textAlign: 'center'
}

export default class Sidebar extends React.Component {
  static propTypes = {
    menuitem: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { current_menu: this.props.menuitem };
  }

  updateCurrentMenu = (menuitem) => {
    this.setState({ menuitem });
  };

  render() {
    return (
      <table id="menulist" style={menuStyle}>
        <tbody>
          <tr><td>Introduction</td></tr>
          <tr><td>Login|Logout</td></tr>
          <tr><td>Your Status</td></tr>
          <tr><td>User Information</td></tr>
          <tr><td>User Configuration</td></tr>
          <tr><td>Model Management</td></tr>
          <tr><td>Model Submission</td></tr>
          <tr><td>Submission Results</td></tr>
          <tr><td>Support</td></tr>
         </tbody>
      </table>
    );

  }
}