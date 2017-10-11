import PropTypes from 'prop-types';
import React from 'react';

// import MenuItem from './MenuItem';
import * as myStyles from './Styles.js';

export default class Session extends React.Component {
  static propTypes = {
    session_comment: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };
  }

  updateLoggedIn = () => {
    this.setState({ isLoggedIn: true }); //sidebar: redundant state, portal knows
    // TBD this.props.handler(menuitem); //portal, set here so it can tell component too UPDATE this for portal isLoggedIn
  };

  render() {
    var s = myStyles.Styles;

    return (
      <div>
        LOGGED IN
      </div>
    );

  }
}

      //<div class="dialog">
      //  <form action="/login" accept-charset="UTF-8" method="post">
      //    <input name="utf8" type="hidden" value="&#x2713;" />
      //    <input type="hidden" name="authenticity_token" value="lG4LhNtCGPesSxM2FmC3wsRVYlcaUnumreKcWh+BtBVpMp91hdcF9z0zLuq3F9hQOM2/u1rfgPWtq0wPxDhoEQ==" />

      //    <label for="session_username">Username</label>
      //    <input type="text" name="session[username]" id="session_username" />

      //    <label for="session_password">Password</label>
      //    <input type="password" name="session[password]" id="session_password" />

      //    <input type="submit" name="commit" value="Log in" data-disable-with="Log in" />
      //  </form>
      //  <ul class="session-links">
      //    <li>New user?</li>
      //    <li><a href="/users/new">Sign up</a></li>
      //  </ul>
      //</div>