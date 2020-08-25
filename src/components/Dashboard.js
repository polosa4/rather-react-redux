import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions'
class Dashboard extends Component {
    state = {
        questionSwitch : false,
    }


    handleChangeAnswered = () => {
        this.setState({
            questionSwitch : true
        })
    }
    handleChangeUnAnswered = () => {
        this.setState({
            questionSwitch : false
        })
    }
    
    render(){
        
        return (
            
            <div className="generalQ">
                <div>
                <div className="row" style={{marginTop: '35px', fontWeight: '450'}}>
                    <span className="col-md-1"></span>
                    <p className="col-md-5 topPick" onClick={this.handleChangeUnAnswered} style={{marginRight:'15px', cursor:'pointer'}}><b>Unanswered question</b></p>
                    <p className="col-md-5 topPick" onClick={this.handleChangeAnswered} style={{cursor:'pointer'}}><b>Answered question</b></p></div>
                </div>
                {this.state.questionSwitch === false ? (
                this.props.qAnswerred.map((q) => (
                    <li key={q.id}>
                        <Questions id={q.id}/>
                    </li>
                ))
                ): this.props.qUnaswered.map((q) => (
                    <li key={q.id}>
                        <Questions id={q.id}/>
                    </li>
                ))}
            </div>
            
        )
    }
}

function mapStateToProps ({questions, users, authedUser}){
    const allQs = Object.values(questions)
    const userAs = authedUser ? Object.keys(users[authedUser].answers) : []
    return {
        questionsID: Object.keys(questions),
        qAnswerred: allQs.filter(q => !userAs.includes(q.id)).sort((a, b) => b.timestamp - a.timestamp),
        qUnaswered: allQs.filter(q => userAs.includes(q.id)).sort((a, b) => b.timestamp - a.timestamp)
    }
}

export default connect(mapStateToProps) (Dashboard)