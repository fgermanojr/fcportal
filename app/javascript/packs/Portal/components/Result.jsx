import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js'; //not used

export default class Result extends React.Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { model: this.props.model };
  }

  updateName = (model) => {
    this.setState({ model });
  };

  render() {
    var s = myStyles.Styles;
    return (
      <div id="result">
        <h1>Fortran Calculus Run Results</h1>
        <p>Status: Success, Failure</p>
        <p>
        <a href="../cgi-bin/testbase/MC7Bt/frank/default/acmotor/110411A/console/index.html">Console</a></p>
        <p>
        <a href="../cgi-bin/testbase/MC7Bt/frank/default/acmotor/110411A/summary/sumtoc.html">Summary</a></p>
        <p>
        <a href="../cgi-bin/testbase/MC7Bt/frank/default/acmotor/110411A/detail/dettoc.html">Detail</a></p>
        <p>
        Graphics</p>
        <p>
        &nbsp;</p>
        <p>Log File</p>
        <p>Lub? Log</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
    );


  }
}