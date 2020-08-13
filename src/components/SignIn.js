import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'
import '../form.css';
import { setAuthedUser} from '../actions/authUser'
import { Redirect } from 'react-router-dom'

 class SignIn extends Component {

    state = {
        user: '',
        toDash: false,
      }

      handleChange = (e) => {
        const user = e.target.value
    
        this.setState(() => ({
          user
        }))
      }
    handleSubmit = (e) => {
        e.preventDefault()
        const { user } = this.state
        const { dispatch } = this.props
        
        dispatch(setAuthedUser(user))
        
        this.setState(() => ({
            //user: '',
            toDash: user ? true : false,
          }))
        
    }


     render(){
         const {users} = this.props
         const {usersO} = this.props
         const {toDash} = this.state
         if (toDash === true) {
            return <Redirect to='/dashboard' />
          }
        //const { id, name } = users
        //const {name, id} = question
         console.log(this.props)
         let count = 0;
         return (
            <div className="generalQ" style={{height: '355px'}}>
                
               
                <div className="col-md-12">
                    <div className="text-center" style={{marginTop: '45px'}}><b>Welcome to the Would You Rather App</b></div>
                    <div className="text-center" style={{color: '#808080', fontSize:'13px'}}>Please Sign In to continue</div>
                    <div className='tweet-info'>
                        <form onSubmit={this.handleSubmit}>
                            <select onChange={this.handleChange} className="formC" ref="userId">
                            <option key="xxx" value="none" selected disabled hidden> 
                                Select User
                            </option> 
                                {usersO.map((user) => (
                                    <option key={users[user].id} value={users[user].id}>{users[user].name}</option>
                                    ))}
                            </select>
                            <input type="submit" className="fourth" value="SIGN IN"/>
                        </form>
                    </div>
                    
                </div>  
             </div>
             
         )
     }
 }

 function mapStateToProps ({users, questions}){
     //const question = users[id]
     //const user = user[id]
     //const parentTweet = tweet ? tweets[tweet.replyingTo] : null
     return {
         //authedUser,
         
         usersO: Object.keys(users),
         users: users
     }
 }

 export default withRouter(connect(mapStateToProps)(SignIn))