import React, {Component, Fragment} from "react";
import ReactNavbar from "react-responsive-signin-animate-navbar-os";
import { connect } from 'react-redux'
import { Link, withRouter, NavLink, Redirect } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authUser'
 
class Navbar extends Component {
  
  
  handleSubmit = (userId) => {
    const { dispatch } = this.props
   dispatch(removeAuthedUser(userId))
  }


  render() {
    
    const { user } = this.props
    if (typeof user === "undefined" || user.authedUser === "") {
      return (
        <Redirect to="/" />
      )
    }else{
      var { name, id } = user
    } 
    
    
    return (
      <Fragment>
      
          
      <ReactNavbar
        onHandleSubmit={this.handleSubmit}
        color="#581B98"
        username={name}
        userid={id}
        logo="https://svgshare.com/i/KHh.svg"
        menu={[
          { name: "HOME", to: "/dashboard" },
          { name: "NEW POLL", to: "/add" },
          { name: "LEADERBOARD", to: "/leaderboard" },
          
        ]}
        social={[
          {
            //name: "Linkedin",
            //url: "https://www.linkedin.com/in/oleh-stelmakh/",
            //icon: ["fab", "linkedin-in"],
          },
          {
            //name: "Facebook",
            //url: "https://www.facebook.com/oleg.stelmakh.1/",
            //icon: ["fab", "facebook-f"],
          },
          {
            //name: "Instagram",
            //url: "https://www.instagram.com/olegst/",
            //icon: ["fab", "instagram"],
          },
          {
            //name: "Twitter",
            //url: "https://twitter.com/olegstelmakh1",
            //icon: ["fab", "twitter"],
          },
        ]}
      />
      
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  

return {
  
  user: users[authedUser]
}
}

export default withRouter(connect(mapStateToProps)(Navbar));