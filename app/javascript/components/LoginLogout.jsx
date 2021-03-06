import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import * as myStyles from './Styles.js';

export default class LoginLogout extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.string.isRequired,
    portal_updateIsLoggedIn: PropTypes.string.isRequired,
    handler_update_user_state: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { is_logged_in: false, create_user: false,
                   username: '', password: '', password_confirmation: '' };
  }

  updateLoggedIn = (results) => {
    if(results.result == 'authenticated') {
      this.setState({ is_logged_in: true });
      this.props.portal_updateIsLoggedIn(); //this will set the login state in portal to true
      this.props.handler_update_user_state({user_state: {username: this.state.username, email: this.state.email}})
      alert('ll state isLoggedIn set to true');
    }
  };

  set_create_user = () => {
alert('create_user to true');
    this.setState({ create_user: true });
  };

  remove_create_user = () => {
alert('create_user to false');
    this.setState({ create_user: false});
  };

  updateUsername = (event) => {
    this.setState({username: event.target.value}); // updates each letter
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });  // updates each letter
  };

  updatePasswordConfirmation = (event) => {
    this.setState({ password_confirmation: event.target.value });  // updates each letter
  };

  updateEmail = (event) => {
    this.setState({ email: event.target.value });  // updates each letter
  };

  login_ajax_a = (event) => {
    event.preventDefault();
// alert(this.state.username);
// alert(this.state.password);

    var self = this;
    // this keyword has a different value depending of where it is called.
    //  this in this.setState should refer to the constructor object,
    //   and when you call this inside a function,
    //    it refers to the window object.  => Abdellah Alaoui

    axios({
      method: 'POST',
      url: '/login',
      async: false,
      headers: {
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // { session: { username: 'frankgermano', password: 'Portal#1' } }
      data: { session: { username: this.state.username, password: this.state.password } }
    })
    .then(function(response) {
       alert(JSON.stringify(response.data));
       self.updateLoggedIn(response.data);

       // update global state in portal
    })
    .catch(function(error) {
       alert(JSON.stringify(error));
    });

  };

  signup_ajax = () => {
alert('signup_ajax');
 event.preventDefault();
// alert(this.state.username);
// alert(this.state.password);

    var self = this;
    // this keyword has a different value depending of where it is called.
    //  this in this.setState should refer to the constructor object,
    //   and when you call this inside a function,
    //    it refers to the window object.  => Abdellah Alaoui

    axios({
      method: 'POST',
      url: '/users',
      async: false,
      headers: {
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // { session: { username: 'frankgermano', password: 'Portal#1' } }
      data: { user: { username: this.state.username,
                      password: this.state.password,
                      password_confirmation: this.state.password_confirmation,
                      email: this.state.email } }
    })
    .then(function(response) {
       alert(JSON.stringify(response.data));
       self.updateLoggedIn(response.data);

       // set global state in portal

    })
    .catch(function(error) {
       alert(JSON.stringify(error));
    });

  }

  render() {

    var s = myStyles.Styles;
    let dialog = null;

    // if we are logged in, we should hit the logout action?

    if(this.state.create_user) {
      dialog = <div class="dialog signup">
        <table><tbody>
        <tr>
          <td>
            <label for="user_username">Username </label>
            <input type="text" name="user[username]" id="user_username" value={this.state.username} onChange={ evt => this.updateUsername(evt) } />
          </td>
        </tr>
        <tr>
          <td>
            <label for="user_password">Password </label>
            <input type="password" name="user[password]" id="user_password"  value={this.state.password} onChange={ evt => this.updatePassword(evt) }/>
          </td>
        </tr>
        <tr>
          <td>
            <label for="user_password_confirmation">Password Confirmation </label>
            <input type="password" name="user[password_confirmation]" id="user_password_confirmation"
                   value={this.state.password_confirmation} onChange={ evt => this.updatePasswordConfirmation(evt) } />
          </td>

        </tr>
        <tr>
          <td>
            <label for="user_email">Email </label>
            <input type="email" name="user[email]" id="user_email"  value={this.state.email} onChange={ evt => this.updateEmail(evt) }/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button name="commit" onClick={ () => { this.signup_ajax() } }>Sign up</button>
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td>Already have an account?
          <button name="login" onClick={ (e) => { this.remove_create_user() } }> Login</button></td>
        </tr>
        </tbody></table>
      </div>;
     }
    else
     {
      dialog = <div class="dialog login">
        <table><tbody>
          <tr>
            <td>
              <label for="session_username">Username </label>
              <input type="text" name="session[username]" id="session_username" value={this.state.username} onChange={ evt => this.updateUsername(evt) } />
            </td>
          </tr>
          <tr>
            <td>
              <label for="session_password">Password </label>
              <input type="password" name="session[password]" id="session_password" value={this.state.password} onChange={ evt => this.updatePassword(evt) } />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button name="commit" onClick={ (e) => {this.login_ajax_a(e)} }>Login</button>
            </td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>New user?
              <button name="sign_up" onClick={ () => { this.set_create_user() } }>Sign up</button>
            </td>
          </tr>
        </tbody></table>
      </div>;
     }

    return (<div>{ dialog }</div>);

  }
}

