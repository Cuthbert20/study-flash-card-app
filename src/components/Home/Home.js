import React, { Component } from 'react'
import './Home.scss'
import { connect } from 'react-redux';
import axios from 'axios'
import { logoutUser } from '../../ducks/reducer'

export class Home extends Component {
    handleLogout = async () => {
        await axios.post('/auth/logout')
        this.props.logoutUser();
        this.props.history.push('/');
    }
    render(){
        console.log(this.props)
        const { user_id, user_img, username } = this.props
        return(
            <div className='profile-container'>
                <h1>{username}</h1>
                <img src={user_img} alt="" className="profile-img"/>
                <button className="out-btn" onClick={this.handleLogout} >Log Out</button>
            </div>
        )
    }
}
function mapStateToProps(reduxState){
    const { user_id, user_img, username } = reduxState
    return {
        user_id, user_img, username
    }
}

export default connect(mapStateToProps,{ logoutUser })(Home)