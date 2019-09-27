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
        return(
            <div>
                <h1>Your Home Component</h1>
                <button onClick={this.handleLogout} >Log Out</button>
            </div>
        )
    }
}

export default connect(null,{ logoutUser })(Home)