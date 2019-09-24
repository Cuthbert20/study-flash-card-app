import React, { Component } from 'react'
import axios from 'axios'
import './Login.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Login extends Component {
    state = {

    }
    handleRegister = () => {
        this.props.history.push("/register");
    }
    render() {

        return(
            <div>
                <h1>Login</h1>
                <input placeholder='username' type="text"/>
                <input placeholder='password' type="text"/>
                <button>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

export default connect(null,{})(withRouter(Login));