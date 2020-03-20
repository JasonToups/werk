import React, { Component } from "react";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';
import { Header, Container } from 'semantic-ui-react';

import NavBar from './components/NavBar/NavBar'
import PostFeed from './components/PostFeed/PostFeed'
import './App.css';
import Routes from './config/routes'

class App extends Component {
  state = {
    currentUser: localStorage.getItem("uid")
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  }

  logout = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        localStorage.removeItem('uid');
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <div className="App" >
          <NavBar
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
            logout={this.logout}></NavBar>
          <Routes
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
          />
        </div>
      </>
    )
  };
}

export default App;
