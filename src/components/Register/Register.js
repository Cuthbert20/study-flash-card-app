import React, { Component } from 'react'
import './Register.scss'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'

export class Register extends Component{
    state ={
        profilePic: "",
        username: "",
        email: ""
    }
    handleBack = () => {
        this.props.history.push('/')
    }
    handleContinue = () => {
        //need to set state and use this.props.setUser and push with history.
    }
    render(){
        return(
            <div>
                <h1>Register Component</h1>
                <input placeholder="email" type="email"/>
                <input placeholder="username" type="text"/>
                <input placeholder="Profile Image URL" type="text"/>
                <button>Continue</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default connect(null,{setUser})(Register);