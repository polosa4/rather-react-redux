import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import { withRouter, Redirect } from 'react-router-dom'

 class Questions extends Component {
    state = {
        viewPoll: false
      };

    handleClick = () => {
        this.setState(prevState => ({
            viewPoll: !prevState.viewPoll
          }));
    }

     render(){
        const { question } = this.props
        const {name, avatar, optionOne} = question
        if (this.state.viewPoll === true) {
            return <Redirect push to={`/questions/${this.props.question.id}`} />;
          }
         
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
     
     return {
         question: question ? formatQuestion(question, users[question.author]) : null
     }
 }

 export default withRouter(connect(mapStateToProps)(Questions))