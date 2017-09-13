import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from './sidebar';

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
          <tr id="header">
              <td style={headerStyle}>Fortran Calculus Portal</td>
              <td>{new Date().toLocaleTimeString()}</td>
              <td><b>HELP</b></td>
          </tr>
          <tr id="center">
            <td id="side-bar" style={sidebarStyle}>
              <Sidebar menuitem="B" />
            </td>
            <td id="view-port" style={viewportStyle}>
              <div id="view-port-div">
                view-port
              </div>
            </td>
            <td id="sidebar_right" style={borderStyle}></td>
          </tr>
          <tr id="footer">
            <td>&nbsp;&copy;&nbsp;Frank Germano, Jr.</td>
            <td>fgermano@earthlink.net</td>
            <td>v 0.1</td>
          </tr>
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
