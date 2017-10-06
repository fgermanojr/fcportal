import PropTypes from 'prop-types';
import React from 'react';

import MenuIntroduction from './MenuIntroduction';
import Submission from './Submission';
import NotYetImplemented from './NotYetImplemented';
import * as myStyles from './Styles.js'; //not used

export default class Content extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = { current_menu_item: this.props.current_menu_item };
  }

  updateContent = (current_menu_item) => {
    this.setState({ current_menu_item });
  };

  render() {
    // We render results in the content object
    //  depending on the value of the current_menu_item.
    let view_object = null;

    switch(this.props.current_menu_item) {
      case 'Introduction':
        view_object = <MenuIntroduction name="unused"/>;
        break;
      case 'Login|Logout':
        view_object = <NotYetImplemented />
        break;
      case 'Your Status':
        view_object = <NotYetImplemented />
        break;
      case 'User Information':
        view_object = <NotYetImplemented />
        break;
      case 'User Configuration':
        view_object = <NotYetImplemented />
        break;
      case 'Model Management':
        view_object = <NotYetImplemented />
        break;
      case 'Model Submission':
        view_object = <Submission model="amodel"/>;
        break;
      case 'Submission Results':
        view_object = <NotYetImplemented />
        break;
      case 'Documentation':
        view_object = <NotYetImplemented />
        break;
      case 'Support':
        view_object = <NotYetImplemented />
        break;
    }

    return (<div> {view_object} </div>);

  }
}