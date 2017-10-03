import PropTypes from 'prop-types';
import React from 'react';

// // Inline styles
// const tableStyle = {
//   border: '1px solid black',
//   width: '100%'
// }

// const headerStyle = {
//   color: 'blue',
//   fontSize: '1.2em'
// }

// const borderStyle = {
//   border: '1px solid black'
// }

// const sidebarStyle = {
//   border: '1px solid black',
//   width: '20%'
// }

// const viewportStyle = {
//   border: '1px solid black',
//   textAlign: 'center'
// }

// const fontSizeStyle = {

// }

// const domainspanStyle = {
//   float: 'right'
// }

export default class MenuItem extends React.Component {
  static propTypes = { // *** finish
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  clickMenu = (name) => {
    alert(name);// firing on load of sidebar ???
  };

  render() {
    return (
      <button className="side-bar-menu-item"
              onClick={() => {
                this.props.onClick(this.state.name);
              }}>
        { this.props.name }
      </button>
    );
  }
}