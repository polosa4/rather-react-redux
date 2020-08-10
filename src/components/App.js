import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import logo from '../logo.svg';
import '../App.css';
import Navbar from "./Navbar";
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      
      
      
      <Router><Dashboard/></Router>
      </header>
      
    </div>
  );
}
}

export default connect()(App);
