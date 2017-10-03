import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from './MenuItem';


// Inline styles
const listStyle = {
  listStyleType: 'none',
  textAlign: 'center'
}

const menuStyle = {
  textAlign: 'left'
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
    this.state = { current_menu_item: '' }; // The current menu item name

  }

  updateCurrentMenu = (menuitem) => {
    alert(menuitem);
    this.setState({ current_menu_item: menuitem });
  };

  render() {
    return (
      <table id="menulist" style={menuStyle}>
        <tbody>
          <tr><td><MenuItem name="Introduction" onClick={() => this.updateCurrentMenu('Introduction')} /></td></tr>
          <tr><td><MenuItem name="Login|Logout" onClick={() => this.updateCurrentMenu('Login|Logout')}/></td></tr>
          <tr><td><MenuItem name="Your Status" onClick={() => this.updateCurrentMenu('Your Status')}/></td></tr>
          <tr><td><MenuItem name="User Information" onClick={() => this.updateCurrentMenu('User Information')} /></td></tr>
          <tr><td><MenuItem name="User Configuration" onClick={() => this.updateCurrentMenu('User Configuration')} /></td></tr>
          <tr><td><MenuItem name="Model Management" onClick={() => this.updateCurrentMenu('Model Management')} /></td></tr>
          <tr><td><MenuItem name="Model Submission" onClick={() => this.updateCurrentMenu('Model Submission')} /></td></tr>
          <tr><td><MenuItem name="Submission Results" onClick={() => this.updateCurrentMenu('Submission Results')} /></td></tr>
          <tr><td><MenuItem name="Support" onClick={() => this.updateCurrentMenu('Support')} /></td></tr>
         </tbody>
      </table>
    );

  }
}