import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js'; //not used

export default class Footer extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    var s = myStyles.Styles;
    return (
      <tr id="footer">
        <td>
          <span>&emsp;Frank Germano, Jr.</span>
        </td>
        <td>
          <span id="email-span">fgermano@earthlink.net</span>
          <span id="domain-span" style={s.domainspanStyle}>www.fortrancalculus.com </span>
        </td>
      </tr>
    );


  }
}