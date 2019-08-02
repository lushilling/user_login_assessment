import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from './Components/NavigationBar';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // onLoad = () => {
  //   axios.get("http://localhost:5000/user/all")
  //     .then(response => {
  //       this.setState({
  //         data: response.data
  //       })
  //     })
  // }

  // componentDidMount() {
  //   this.onLoad();
  // }


  render() {
    return (
      <div >
        <Router>

          <NavigationBar />

        </Router>
      </div >
    )
  }
}