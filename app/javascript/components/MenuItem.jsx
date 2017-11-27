import PropTypes from 'prop-types';
import React from 'react';

import * as myStyles from './Styles.js';

export default class MenuItem extends React.Component {

  static propTypes = {
    active: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired  //pick better name It is sidebar_updateCurrentMenu
  };

  constructor(props) {
    super(props);

    this.state = { name: this.props.name };
  }

  render() {
    var s = myStyles.Styles;

    // this button's name vs the one sidebar considers active.
    var is_active = this.state.name == this.props.active;
    var btnStyle =  is_active ? s.btnStyleActive : s.btnStyleNormal;

    return (
      <button className="menu_button"
              style={btnStyle}
              onClick={() => {
                this.props.onClick(this.state.name); // tells sidebar, who is active, who then tells portal
              }}>
        { this.props.name }
      </button>
    );
  }
}