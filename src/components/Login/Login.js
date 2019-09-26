import React, { Component } from 'react'
import axios from 'axios'
import './Login.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Login extends Component {
    state = {
        profilePic: '',
        username: '',
        email: "",
        password: ""
    }
    handleRegister = () => {
        this.props.history.push("/register");
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    //handleLogin method will also use setUser Reducer set redux state.
    render() {
        const { username, password} = this.state
        console.log(this.state)
        return(
            <div>
                <h1>Login</h1>
                <input onChange={(e) => this.handleChange(e, "username")} value={username} placeholder='username' type="text"/>
                <input onChange={(e) => this.handleChange(e, "password")} value={password} placeholder='password' type="text"/>
                <button>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

export default connect(null,{})(withRouter(Login));