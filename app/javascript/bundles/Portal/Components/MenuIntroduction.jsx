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

export default class MenuIntroduction extends React.Component {
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
    this.state = { name: this.props.name };  // fgj change this later
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div id="introduction">
        Fortran Calculus is a modeling language used to express optimization problems.
        One can create models, which envolve differentials and integrals, in addition to regular scientific calculations.
        The models can be nested. Internally, the optimizations are driven by automatic differentiation to derive change information.
        Fortran Calculus was created by Joseph Thames and has a long history of implementations, going back to the Apollo space program.
        Visit <a href="www.metacalculus.com">www.metacalculus.com</a>to understand some of this history.
      </div>
    );


  }
}