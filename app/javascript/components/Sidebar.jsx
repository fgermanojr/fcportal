import PropTypes from 'prop-types';
import React from 'react';

import MenuItem from './MenuItem';
import * as myStyles from './Styles.js';

export default class Sidebar extends React.Component {
  static propTypes = {
    current_menu_item: PropTypes.string.isRequired,
    portal_updateCurrentMenu: PropTypes.func.isRequired,
    is_logged_in: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { current_menu_item: 'Introduction'}; // The current menu item's name
  }

  updateCurrentMenu = (current_menu_item) => {
    this.setState({ current_menu_item: current_menu_item }); //sidebar: redundant state, portal knows
    this.props.portal_updateCurrentMenu(current_menu_item); //portal, so portal can tell component what the current menu item is
  };

  render() {
    var s = myStyles.Styles;
    return (
      <table id="menulist" style={s.menuStyle}>
        <tbody>
          <tr><td><span>{this.props.is_logged_in ? 'Logout' : 'Login'}</span></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Introduction" onClick={() => this.updateCurrentMenu('Introduction')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Documentation" onClick={() => this.updateCurrentMenu('Documentation')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Login|Logout" onClick={() => this.updateCurrentMenu('Login|Logout')}/></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Job Status" onClick={() => this.updateCurrentMenu('Your Status')}/></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="User Information" onClick={() => this.updateCurrentMenu('User Information')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="User Configuration" onClick={() => this.updateCurrentMenu('User Configuration')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Model Management" onClick={() => this.updateCurrentMenu('Model Management')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Model Submission" onClick={() => this.updateCurrentMenu('Model Submission')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Submission Results" onClick={() => this.updateCurrentMenu('Submission Results')} /></td></tr>
          <tr><td><MenuItem active={this.state.current_menu_item} name="Support" onClick={() => this.updateCurrentMenu('Support')} /></td></tr>
         </tbody>
      </table>
    );

  }
}
      //    <tr><td><MenuItem active={this.state.current_menu_item} name="Chat" onClick={() => this.updateCurrentMenu('Chat')} /></td></tr>