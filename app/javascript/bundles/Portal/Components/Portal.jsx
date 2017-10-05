import PropTypes from 'prop-types';
import React from 'react';

import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';
import Content from './content';
import * as myStyles from './Styles.js';

export default class Portal extends React.Component {

  constructor(props) {
    super(props);

    this.state = { current_menu_item: 'Introduction' };
  }

  updateCurrentMenuItem = (current_menu_item) => {
    this.setState({ current_menu_item: current_menu_item });
  };

  render() {
    var s = myStyles.Styles;
    return (
      <table style={s.tableStyle}>
        <tbody>
          <Header version="0.1" />
          <tr id="center">
            <td id="side-bar" style={s.sidebarStyle}>
              <Sidebar menuitem="Model Submission" //pull
                       current_menu_item={this.state.current_menu_item}
                       handler={this.updateCurrentMenuItem} //The handler lets sidebar update the current menu item
              />
            </td>
            <td id="view-port" style={s.viewportStyle}>
              <Content content="tag" current_menu_item={this.state.current_menu_item} />
            </td>
          </tr>
          <Footer name="Frank Germano, Jr." />
        </tbody>
      </table>
    );

    // return (
    //   <div>
    //     <h3>
    //       Hello FC, {this.state.name}!
    //     </h3>
    //     <hr />
    //     <form >
    //       <label htmlFor="name">
    //         Say hello to:
    //       </label>
    //       <input
    //         id="name"
    //         type="text"
    //         value={this.state.name}
    //         onChange={(e) => this.updateName(e.target.value)}
    //       />
    //     </form>
    //   </div>
    // );
  }
}
