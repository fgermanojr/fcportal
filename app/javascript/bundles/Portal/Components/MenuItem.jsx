import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Styles';

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

const btnStyleNormal = {
  backgroundColor: 'white'
}

const btnStyleActive = {
  backgroundColor: 'red'   //light-blue'
}

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
    alert(name);
  };

  render() {
    var btnStyle = this.state.name == this.props.active ? btnStyleActive : btnStyleNormal;
    return (
      <button className="menu_button"
              style={btnStyle}
              onClick={() => {
                this.props.onClick(this.state.name);
              }}>
        { this.props.name }
      </button>
    );
  }
}