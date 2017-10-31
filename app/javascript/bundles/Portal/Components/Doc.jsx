import PropTypes from 'prop-types';
import React from 'react';
import * as myStyles from './Styles.js';
// import map from './images/OlympicNationalParkMap.jpg'; //import image, rel path
import Introduction from './manual/introduction.jsx'
//import Chap1 from './manual/Man/chap1/FCMANC1.jsx'
import Chap2 from './manual/Man/chap2/FCMANC2.jsx'
import Chap3 from './manual/Man/chap3/FCMANC3.jsx'
import Scroll from 'react-scroll'; // Imports all Mixins    //NOT WORKING YET

export default class Doc extends React.Component {
  static propTypes = {
    section: PropTypes.string.isRequired, // The section to display
  };

  constructor(props) {
    super(props);

    this.state = {current_section: 'chapter3'}
  }

  render() {
    var s = myStyles.Styles;

    let view_object = null;
    console.log(this.state.current_section);
    switch(this.state.current_section) {
      case 'introduction':
        view_object = <Introduction />;
        break;
      case 'chapter1':
        view_object = <Chap1 />
        break;
      case 'chapter2':
        view_object = <Chap2 />
        break;
      case 'chapter3':
        view_object = <Chap3 />
        break;
    }

    return (
      <div id="{this.state.current_section}">
         {view_object}
      </div>
    );
  }
}


         // <img src={map} alt="map"></img>