import PropTypes from 'prop-types';
import React from 'react';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import SystemStatus from './SystemStatus';
import * as myStyles from './Styles.js'; //Later switch to sass

export default class Portal extends React.Component {

  constructor(props) {
    super(props);

    this.state = { current_menu_item: 'Introduction',
                   status: 'Initial',
                   is_logged_in: false,
                   user_state: { username: '<not logged in>', email: ''}
                 };
  }

  updateCurrentMenuItem = (menu_item) => {
    // The active menu item in the sidebar.
    this.setState({ current_menu_item: menu_item });
  };

  updateIsLoggedIn = () => {
    // set to true once a user is authenticated;
    // this opens up the normal user functions.
    this.setState({ is_logged_in: true})
  };

  updateStatus = (status) => {
    this.setState({ status: status });
  };

  updateUserState = (user_state) => { // save username and email, later more stuff.
    this.setState({ user_state: user_state })
  };

  render() {
    var s = myStyles.Styles;
    return (
      <table style={s.tableStyle}>
        <tbody>
          <Header version="0.1"
                  username='tessgermano'
                  is_logged_in={this.state.is_logged_in}
                  status={this.state.status}/>
          <tr id="center">
            <td id="side-bar" style={s.sidebarStyle}>
              <Sidebar is_logged_in={this.state.is_logged_in}
                       current_menu_item={this.state.current_menu_item}
                       handler={this.updateCurrentMenuItem}
                       // The handler lets sidebar update the current
                       // menu item in Sidebar component
              />
            </td>
            <td id="view-port" style={s.viewportStyle}>
              <Content current_menu_item={this.state.current_menu_item}
                       portal_updateIsLoggedIn={this.updateIsLoggedIn}
                       handler_update_user_state={this.updateUserState}
              />
            </td>
          </tr>
          <Footer name="Frank Germano, Jr." />
        </tbody>
      </table>
    );
  }
}
