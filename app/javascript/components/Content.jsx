import PropTypes from 'prop-types';
import React from 'react';

import MenuIntroduction from './MenuIntroduction';
import Submission from './Submission';
import LoginLogout from './LoginLogout'; // cant use session as component name.
import Result from './Result';
import Chat from './Chat';
import Doc from './Doc';
import PortalIframe from './PortalIframe';
import NotYetImplemented from './NotYetImplemented';

import * as myStyles from './Styles.js'; //not used

export default class Content extends React.Component {
  static propTypes = {
    current_menu_item: PropTypes.string.isRequired,
    portal_updateIsLoggedIn: PropTypes.string.isRequired,
    is_logged_in: PropTypes.string.isRequired,
    handler_update_user_state: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {current_menu_item: this.props.current_menu_item};
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
        view_object = <MenuIntroduction name="unused" />;
        break;
      case 'Login|Logout':
        view_object = <LoginLogout isLoggedIn={this.props.is_logged_in}
                                   portal_updateIsLoggedIn={this.props.portal_updateIsLoggedIn}
                                   handler_update_user_state={this.props.handler_update_user_state}
                       />;
        break;
      case 'Your Status':
        view_object = <NotYetImplemented />;
        break;
      case 'User Information':
        view_object = <NotYetImplemented />;
        break;
      case 'User Configuration':
        view_object = <NotYetImplemented />;
        break;
      case 'Model Management':
        view_object = <NotYetImplemented />;
        break;
      case 'Model Submission':
        view_object = <Submission user="frank" model="acmotor"  status="Initial" />;
        break;
      case 'Submission Results':
        view_object = <Result user="frank" model="acmotor" status="Initial" />; //need user from portal passed into content
        break;
      case 'Documentation':
        view_object = <Doc section="chapter2" />; // may also be hardwired in doc itself.
        break;
      case 'Support':
        view_object = <NotYetImplemented />
        // <PortalIframe src="http://www.metacalculus.com/FCManChapters.html" />;
        // For now. This shows PDF scanned versions of manual.
        // Soon, set up pages controller, which serves up pages from web server.
        break;
      case 'Chat':
        view_object = <Chat />;
        break;
    }

    return (<div> {view_object} </div>);

  }
}