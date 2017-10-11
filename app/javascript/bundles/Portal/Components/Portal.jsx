import PropTypes from 'prop-types';
import React from 'react';

import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';
import Content from './content';
import Status from './status';
import * as myStyles from './Styles.js';

export default class Portal extends React.Component {

  constructor(props) {
    super(props);

    this.state = { current_menu_item: 'Introduction', status: '', is_logged_in: false};
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

  updateStatus = (notification) => {
    // An area to display notifications; exists below sidebar.
    this.setState({ status: notification });
  };

  updateUserState = (user_state) => { // save username and email, later more stuff.
    this.setState({ user_state: user_state })
  };

  render() {
    var s = myStyles.Styles;
    return (
      <table style={s.tableStyle}>
        <tbody>
          <Header version="0.1" username="frankgermano"/>
          <tr id="center">
            <td id="side-bar" style={s.sidebarStyle}>
              <Sidebar menuitem="Model Submission" //pull
                       current_menu_item={this.state.current_menu_item}
                       handler={this.updateCurrentMenuItem} //The handler lets sidebar update the current menu item in Sidebar component
              />
            <Status notification={this.state.status}/>
            </td>
            <td id="view-port" style={s.viewportStyle}>
              <Content current_menu_item={this.state.current_menu_item} />
            </td>
          </tr>
          <Footer name="Frank Germano, Jr." />
        </tbody>
      </table>
    );
  }
}
