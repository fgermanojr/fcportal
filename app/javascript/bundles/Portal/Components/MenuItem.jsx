import PropTypes from 'prop-types';
import React from 'react';

import * as myStyles from './Styles.js';

export default class MenuItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  clickMenu = (name) => {//***not used
    alert(name);
  };

  render() {
    var s = myStyles.Styles;
    // var btnStyle = this.state.name == this.props.active ? myStyles.Styles.btnStyleActive : myStyles.Styles.btnStyleNormal;
    // If this menu item's names matchs the current active menu, then show it as active.
    // Q. should I do this in parent and pass in isActive true.
    var btnStyle = this.state.name == this.props.active ? s.btnStyleActive : s.btnStyleNormal;

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