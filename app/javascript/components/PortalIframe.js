import PropTypes from 'prop-types';
import React from 'react';

// import * as myStyles from './Styles.js'; //not used

export default class PortalIframe extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { src: this.props.src };
  }

  updateIframeSrc = (src) => {
    this.setState({ src: src });
  }

  render() {
    //var s = myStyles.Styles;
    return (
      <iframe id="portal_iframe" src={this.props.src}>
      </iframe>
    );
  }
}