import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Auth from '../Auth/Auth';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.auth;
    console.log(isAuthenticated())
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}