import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'
//import { TiArrowBackOutline,TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'
//import { TiArrowBackOutline } from 'react-icons/ti'
//import { TiHeartOutline } from 'react-icons/ti'
//import { TiHeartFullOutline } from 'react-icons/ti'
//import { handleToggleTweet } from '../actions/tweets'
import { Link, withRouter, Redirect } from 'react-router-dom'

 class Questions extends Component {
    state = {
        viewPoll: false
      };

    handleClick = () => {
        //<Redirect push to={`/articles`} />;
        console.log("hello")
        this.setState(prevState => ({
            viewPoll: !prevState.viewPoll
          }));
        
    }

     render(){
        const { question } = this.props
        const {name, avatar, id, optionOne} = question
        if (this.state.viewPoll === true) {
            return <Redirect push to={`/questions/${this.props.question.id}`} />;
          }
         console.log(question)
         return (
             <div>
                 <div className="row">
                 <div className="col-md-1"></div>
            <div className="col-md-6 userS">{name}</div>
            </div>
            <div className="col-md-10 tweet" onClick={this.handleClick} >
                 
                 <img
              src={avatar}
              alt={`Avatar of ${name}`}
              className='avatar'
            />
                <div className='tweet-info'>
                        
                        <div><p><b>Would you rather</b></p>
                        <span>...{optionOne.text}...</span>
                        </div>
                    
            
                </div>
                
             </div>  
             </div>
         )
     }
 }

 function mapStateToProps ({users, questions}, {id}){
     const question = questions[id]
     //const user = user[id]
     //const parentTweet = tweet ? tweets[tweet.replyingTo] : null
     return {
         //authedUser,
         question: question ? formatQuestion(question, users[question.author]) : null
     }
 }

 export default withRouter(connect(mapStateToProps)(Questions))