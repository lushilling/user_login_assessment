import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from './Components/NavigationBar';
import Homepage from './Components/Homepage';
import Register from './Components/Register';
import User from './Components/User';
import UserList from './Components/UserList';
import Login from './Components/Login';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  onLoad = () => {
    axios.get("http://localhost:5000/user/all")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <div >
        <Router>

          <NavigationBar />

          <Route exact path="/" component={Homepage} />

          <Route path="/Register" component={Register} render={() => <Register onLoadFunction={this.onLoad} data={this.state.data} />} />

          <Route path="/UserList" render={() => <UserList onLoadFunction={this.onLoad} data={this.state.data} />} />

          <Route path="/Login" component={Login} render={() => <Login onLoadFunction={this.onLoad} data={this.state.data} />} />

          {this.state.data.map((user) => (

            <Route path={"/" + user.username + "/" + user.password} render={() => <User onLoadFunction={this.onLoad}
              username={user.username}
              email={user.email}
              password={user.password}
              password2={user.password2} />} />

          ))}

        </Router>
      </div >
    )
  }
}