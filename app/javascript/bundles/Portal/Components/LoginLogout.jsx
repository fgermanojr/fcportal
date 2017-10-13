import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import * as myStyles from './Styles.js';

export default class LoginLogout extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.string.isRequired,
    portal_updateIsLoggedIn: PropTypes.string.isRequired
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
                      password: this.state.password_confirmation,
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
// alert('isLoggedIn' + this.state.is_logged_in)

    let dialog = null;

    if(this.state.create_user) {
      dialog = <div class="dialog signup">
        <label for="user_username">Username </label>
        <input type="text" name="user[username]" id="user_username" value={this.state.username} onChange={ evt => this.updateUsername(evt) } />

        <label for="user_password">Password </label>
        <input type="password" name="user[password]" id="userpassword"  value={this.state.password} onChange={ evt => this.updatePassword(evt) }/>

        <label for="user_password_confirmation">Password Confirmation </label>
        <input type="password" name="user[password_confirmation]" id="user_password_confirmation"
               value={this.state.password_confirmation} onChange={ evt => this.updatePasswordConfirmation(evt) } />
        <label for="user_email">Email </label>
        <input type="email" name="user[email]" id="user_email"  value={this.state.email} onChange={ evt => this.updateEmail(evt) }/>

        <button name="commit" onClick={ () => { this.signup_ajax() } }>Sign up</button>
        <ul class="session-links">
          <li>Already have an account?</li>
          <li><button name="login" onClick={ (e) => { this.remove_create_user() } }> Login</button></li>
        </ul>
      </div>;
     }
    else
     {
      dialog = <div class="dialog login">
        <label for="session_username">Username </label>
        <input type="text" name="session[username]" id="session_username" value={this.state.username} onChange={ evt => this.updateUsername(evt) } />

        <label for="session_password">Password </label>
        <input type="password" name="session[password]" id="session_password" value={this.state.password} onChange={ evt => this.updatePassword(evt) } />

        <button name="commit" onClick={ (e) => {this.login_ajax_a(e)} }>Login</button>
        <ul class="session-links">
          <li>New user?</li>
          <li><button name="sign_up" onClick={ () => { this.set_create_user() } }> Sign up</button></li>
        </ul>
      </div>;
     }

    return (<div>{ dialog }</div>);

  }
}

