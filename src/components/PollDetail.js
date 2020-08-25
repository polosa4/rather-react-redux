import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/shared'
import '../App.css'
import { Redirect } from 'react-router-dom';

class PollDetail extends Component {
    state = {
        selectedValue : null
    }
    handleChange = (e) => {
        console.log("handleCHange " +e.target.value)
        this.setState({
            selectedValue: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log("stateV " +this.state.selectedValue)
        this.props.dispatch(handleAnswer(this.props.authedUser, this.props.match.params.id, this.state.selectedValue))
    }
    render() {
        if(this.props.error) {
            return (
                <Redirect to="/404-page" />
            )
        }
        console.log("PollDetail " +this.props.q.optionOne.text)  
        let ques = this.props.q ? this.props.q : ''
        console.log("PollDetail " +ques.optionOne.text) 
        let answerMarkOp1 = this.props.q ? this.props.q.optionOne.votes.includes(this.props.authedUser) : null
        let answerMarkOp2 = this.props.q ? this.props.q.optionTwo.votes.includes(this.props.authedUser) : null
        let percentA = true ? ((ques.optionOne.votes.length / (ques.optionOne.votes.length + ques.optionTwo.votes.length)) * 100).toFixed(2) +'%' : ''
        let percentB = true ? ((ques.optionTwo.votes.length / (ques.optionOne.votes.length + ques.optionTwo.votes.length)) * 100).toFixed(2) +'%' : ''
        console.log("percentA" +percentB);
        console.log("percentB" +percentB);
        //let percentR = (percentA).toFixed(2) + '%';
        return (
            <div className="generalQ" style={{paddingBottom: '30px'}}>
                
                    {answerMarkOp1 === true || answerMarkOp2 === true ? (
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-6 userS">{this.props.author.name} asks:</div>
                            </div>
                            
                            <div className="tweet" style={{flexdirection: 'column'}} onClick={this.handleClick} >
                               
                                        <img
                                            src={this.props.author.avatarURL}
                                            alt={`Avatar of ${this.props.author.name}`}    
                                            className='avatar'
                                         />
                                          <div className="tweet-info">
                                                <div>
                                                        <div> 
                                                        </div>
                                                        <div><p><b>Would you rather {ques.optionOne.text}</b>{answerMarkOp1 ? (
                                                            <span style={{marginLeft: '15px'}} className="badge badge-pill badge-warning">Your Vote</span>
                                                        ) : ' '}</p>
                                                        
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{width: percentA}} aria-valuenow={percentA} aria-valuemin="0" aria-valuemax="100">{percentA}</div>
                                                        </div>
                                                            <p>{ques ? `${ques.optionOne.votes.length} out of ${ques.optionTwo.votes.length + ques.optionOne.votes.length}` : ' '}</p>
                                                        </div>
                                                
                                                        <div> 
                                                        </div>
                                                        <div><p><b>Would you rather {ques.optionTwo.text}</b>{answerMarkOp2 ? (
                                                            <span style={{marginLeft: '15px'}} className="badge badge-pill badge-warning">Your Vote</span>
                                                        ) : ' '}</p>
                                                        
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{width: percentB}} aria-valuenow={percentB} aria-valuemin="0" aria-valuemax="100">{percentB}</div>
                                                        </div>
                                                            <p>{ques ? `${ques.optionTwo.votes.length} out of ${ques.optionTwo.votes.length + ques.optionOne.votes.length}` : ' '}</p>
                                                        </div>
                                                </div>
                                    
                                         </div>  
                             </div>
                            
                        </div>  
                    ) : (   
                        
                        

                        <div>
                        <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6 userS">{this.props.author.name} asks</div>
                        </div>
                        <div className="col-md-10 tweet" onClick={this.handleClick} >
                                
                                <img
                            src={this.props.author.avatarURL}
                            alt={`Avatar of ${this.props.author.name}`}  
                            className='avatar'
                        />
                            <div className='tweet-info'>
                                    
                                    <div><p><b>Would you rather</b></p>
                                    
                                    <div className="form-check col-md-12"><input type="radio" onClick={this.handleChange} name="select" className="form-check-input" onChange={this.handleChange1} placeholder="Option 1" value="optionOne"></input><label>{ques.optionOne.text}</label></div>
                                    <div className="form-check col-md-12"><input type="radio" onClick={this.handleChange} name="select" className="form-check-input" onChange={this.handleChange2} placeholder="Option 2" value="optionTwo"></input><label>{ques.optionTwo.text}</label></div>
                                    
                                    </div>
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.onSubmit}>Submit</button>

                            </div>
                          </div>  
                        </div>  
                            
                        )}
                
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, { match }) {
    if(questions[match.params.id] === undefined) {
        const error = true;
        return {
            error
        }
    }

    let q = questions[match.params.id]
    let author = q ? users[q.author] : ''
    return {
        q: questions[match.params.id],
        author,
        authedUser
    }
}

export default connect(mapStateToProps)(PollDetail)