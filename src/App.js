import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
// import Navbar from "./components/layout/Navbar"
// import "./App.css";
import Routes from "./Routes"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
