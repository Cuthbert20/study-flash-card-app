import React, { Component } from 'react'
import axios from 'axios'
import './Login.scss'

export default class Login extends Component {
    state = {
        
    }
    render() {
        return(
            <div>
                <h1>Login</h1>
                <input placeholder='username' type="text"/>
                <input placeholder='password' type="text"/>
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}