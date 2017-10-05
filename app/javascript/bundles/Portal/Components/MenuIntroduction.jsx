import PropTypes from 'prop-types';
import React from 'react';

export default class MenuIntroduction extends React.Component {
  static propTypes = { // *** finish
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { name: this.props.name };  // fgj change this later
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div id="introduction">
        <p>
          Fortran Calculus is a modeling language used to express optimization problems.
          A special statement, FIND, allows you to specifiy the parameters of the optimization;
          the system then constructs a unique algorithm to drive the optimization.</p>
        <p>
          One can create models, which envolve differentials and integrals, in addition to regular scientific calculations.
          The models can be nested. Internally, the optimizations are driven by automatic differentiation to derive change information.</p>
        <p>
          Fortran Calculus was created by Joseph Thames and has a long history of implementations, going back to the Apollo space program.
          Visit <a href="http://www.metacalculus.com/fc77.html">www.metacalculus.com</a>to understand some of this history.
          An excellent overview paper is <a href="http://www.metacalculus.com/doc/FC/Fortran_Calculus.pdf">FortranCalculus: A new implementation of synthetic calculus</a></p>
        <p>Phil Brubaker has written a textbook, Engineering Design Optimization using Calculus Level Methods:
          A Casebook Approach: Math Modeling, Simulation, & Optimization, using this Fortran Calculus software.</p>
      </div>
    );


  }
}