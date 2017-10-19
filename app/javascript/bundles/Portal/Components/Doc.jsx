import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js';
import map from './images/OlympicNationalParkMap.jpg'; //import image, rel path

export default class Doc extends React.Component {
  static propTypes = {
    section: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var s = myStyles.Styles;
    // do a json request to get the html back from server
    // q. will the image links work? can I server that content from public?
    return (
      <div id="section">
         {this.props.section}
         <img src={map} alt="map"></img>
      </div>
    );


  }
}