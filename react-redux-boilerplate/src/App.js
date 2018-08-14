import React, { Component } from 'react';
import './App.css';
import UserList from './container/user-list'

class App extends Component {
  render() {
    return (
      <div>
      <p>react-redux-boilerplate</p>
      <UserList />
      </div>
    );
  }
}

export default App;
