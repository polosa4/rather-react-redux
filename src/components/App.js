import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import logo from '../logo.svg';
import '../App.css';
import Navbar from "./Navbar";
import SignIn from "./SignIn";
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NewQuestion from './NewQuestion'
import PollDetail from './PollDetail'
import Leaderboard from './Leaderboard'
import PrivateRoute from './PrivateRoute'
import ErrorPage from './Er404'

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
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/add' component={NewQuestion} />
        <PrivateRoute path='/leaderboard' component={Leaderboard} />
        <PrivateRoute path="/404-page" component={ErrorPage}/>
        <PrivateRoute path="/questions/:id" component={ PollDetail }/>
        
        
      </Router>
      
      </header>
      
    </div>
  );
}
}

export default connect()(App);
