import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Container, Col, Form } from 'react-bootstrap'
import { handleSaveQuestion } from '../actions/shared'
//import NavigationBar from './navigationBar'
//import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'

class NewQuestion extends Component {
    state = {
        option1: null,
        option2: null
    }
    handleChange1 = (e) => {
        this.setState({
            option1: e.target.value  
        })
    }
    handleChange2 = (e) => {
        this.setState({
            option2: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleSaveQuestion(this.props.authedUser, this.state.option1, this.state.option2))
        this.props.history.push('/Dashboard')
    }
    render() {
        return (
            <div className="generalQ">
                
                <div className="row" style={{marginTop: '35px', fontWeight: '450'}}>
                    <span className="col-md-4 text-center">Would you Rather...</span>
               </div>

               <div className='tweet-info'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group" style={{paddingRight: '20px'}}>
                                <input type="text" onChange={this.handleChange1} className="form-control" placeholder="Option 1"></input>
                                <div class="col-auto">OR</div>
                                <input type="text" onChange={this.handleChange2} className="form-control" placeholder="Option 2"></input>
                            </div>
                            <input type="submit" className="fourth" value="Add"/>
                        </form>
                </div>

                
            </div>
            
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)