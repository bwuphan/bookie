import React, { Component } from 'react';
import Auth from '../Auth/Auth';

export default class Callback extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth();
  }

  render() {
    const { handleAuthentication } = this.auth;
    handleAuthentication(this.props);
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
}