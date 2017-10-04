import PropTypes from 'prop-types';
import React from 'react';

import Sidebar from './sidebar';
import Footer from './footer';
import Header from './header';
import Content from './content';

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
  textAlign: 'left',
  width: '80%'
}

const fontSizeStyle = {

}

export default class Portal extends React.Component {
  // static propTypes = {
  //   current_menu_item: PropTypes.string.isRequired, // this is passed from the Rails view
  // }; PULL

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { current_menu_item: 'Introduction' };
  }

  updateCurrentMenuItem = (current_menu_item) => {
    this.setState({ current_menu_item: current_menu_item });
  };

  render() {
    return (
      <table style={tableStyle}>
        <tbody>
          <Header version="0.1" />
          <tr id="center">
            <td id="side-bar" style={sidebarStyle}>
              <Sidebar menuitem="Model Submission" //pull
                       current_menu_item={this.state.current_menu_item}
                       handler={this.updateCurrentMenuItem} //The handler lets sidebar update the current menu item
              />
            </td>
            <td id="view-port" style={viewportStyle}>
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
