import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import logo from '../logo.svg';
import '../App.css';
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  componentDidUpdate (prevProps, prevState) {
    // update state 
  }
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
      
      
      
      
      
      <Router>
        <Navbar/>
        
        <Route path='/' exact component={SignIn} />
        <Route path='/dashboard' component={Dashboard} />
        
        
      </Router>
      
      </header>
      
    </div>
  );
}
}

export default connect()(App);
