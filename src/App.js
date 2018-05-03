import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar';
import Container from './components/Container';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Container/>
      



      </div>
    );
  }
}

export default App;
