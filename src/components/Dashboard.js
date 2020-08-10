import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions'
class Dashboard extends Component {
    render(){
        console.log(this.props)
        return (
            <div className="generalQ">
                <div>
                <div className="row" style={{marginTop: '35px', fontWeight: '450'}}>
                    <span className="col-md-1"></span>
                    <p className="col-md-5 topPick" style={{marginRight:'15px'}}><b>Unanswered question</b></p>
                    <p className="col-md-5 topPick"><b>Answered question</b></p></div>
                </div>
                {this.props.questionsID.map((id) => (
                    <li key={id}>
                        <Questions id={id}/>
                    </li>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({questions}){
    return {
        //console.log(tweets)
        questionsID: Object.keys(questions)
        //.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp )
    }
}

export default connect(mapStateToProps) (Dashboard)