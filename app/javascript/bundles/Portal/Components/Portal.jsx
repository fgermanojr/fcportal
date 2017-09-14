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
  static propTypes = {
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
      <table style={tableStyle}>
        <tbody>
          <Header version="0.1" />
          <tr id="center">
            <td id="side-bar" style={sidebarStyle}>
              <Sidebar menuitem="Introduction" />
            </td>
            <td id="view-port" style={viewportStyle}>
              <Content content="tag" />
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
