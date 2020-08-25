import React, { Component } from 'react'
import { connect } from 'react-redux'
//import LeaderboardCard from './leaderboardCard'

class Leaderboard extends Component {
    render() {
        const {usersData} = this.props
        return (
            <div className="generalQ" style={{padding: '20px 0px 20px 0px'}}>
                {usersData.map(user => (
                <li key={user.id}>  
                    <div>
                        <div className="row">
                        <div className="col-md-1"></div>
                    <div className="col-md-6 userS"></div>
                    </div>
                    <div className="col-md-10 tweet">
                        
                        <img
                    src={user.avatar}
                    alt={`Avatar of ${user.name}`}
                    className='avatar'
                    />
                        <div className='tweet-info'>
                                
                                <div><p><b>{user.name}</b></p></div>
                                <span className="leader">Answered questions: {user.aCount}</span>
                                <span className="leader">Created questions: {user.qCount}</span>
                                <span className="badge badge-pill badge-success" style={{marginTop: '10px'}}>Score: {user.total}</span>
                         
                        </div>
                        
                    </div>  
                    </div>
                </li>
             ))}
            </div>
            
        )
    }
}

function mapStateToProps({users}) {
    const usersData = Object.values(users).map(user => ({
        name:user.name,
        id:user.id,
        aCount: Object.values(user.answers).length,
        qCount: user.questions.length,
        total: user.questions.length+Object.values(user.answers).length,
        avatar: user.avatarURL
    })).sort((a,b) => b.total  - a.total)
    return {
        usersData
    }
}

export default connect(mapStateToProps)(Leaderboard)