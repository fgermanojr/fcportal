import PropTypes from 'prop-types';
import React from 'react';

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
      <ul id="menulist">
        <li>Introduction</li>
        <li>Login|Logout</li>
        <li>Your Status</li>
        <li>User Information</li>
        <li>User Configuration</li>
        <li>Model Management</li>
        <li>Model Submission</li>
        <li>Submission Results</li>
        <li>Support</li>
      </ul>
    );

  }
}