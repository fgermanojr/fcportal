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

  updateIframeSrc = (src) => {// Not used, at present.
    // If I change stage, and pull iframe source from  state
    // will iframe refresh?
    this.setState({ src: src });
  }

  render() {
    //var s = myStyles.Styles;
    return (// need to work on sizing, right now for me. try in content;s area
      <iframe id="portal_iframe" height="600" width="600" src={this.props.src}></iframe>
    );
  }
}