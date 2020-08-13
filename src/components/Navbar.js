import React, {Component, Fragment} from "react";
import ReactNavbar from "react-responsive-animate-navbar";
import { connect } from 'react-redux'
import { Link, withRouter, NavLink } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authUser'
 
class Navbar extends Component {
  handleSubmit = (userId) => {
    
    
    const { dispatch } = this.props
    
    dispatch(removeAuthedUser(userId))
    
    
    
  }
  render() {
    
    const { user } = this.props
    if (typeof user === "undefined") {

    }else{
      var { name, id } = user
      console.log(name)
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
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
      
      </Fragment>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  

return {
  
  user: !users[authedUser] ? [] : users[authedUser]
}
}

export default withRouter(connect(mapStateToProps)(Navbar));