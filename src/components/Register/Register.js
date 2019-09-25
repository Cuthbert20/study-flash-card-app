import React, { Component } from 'react'
import './Register.scss'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'

export class Register extends Component{
    state ={
        profilePic: "",
        username: "",
        email: "",
        password: ""
    }
    handleBack = () => {
        this.props.history.push('/')
    }
    handleContinue = () => {
        //need to set state and use this.props.setUser and push with history.
        const { profilePic, username, email, password } = this.state 
        this.props.setUser({user_email: email, user_img: profilePic, username, user_password: password });
        this.props.history.push('/home')
    }
    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }
    render(){
        console.log(this.props)
        const { email, username, profilePic, password } = this.state
        return(
            <div>
                <h1>Register Component</h1>
                <input onChange={(e) => this.handleChange(e, 'email')} value={email} placeholder="email" type="email"/>
                <input onChange={(e) => this.handleChange(e, 'username')} value={username} placeholder="username" type="text"/>
                <input onChange={(e) => this.handleChange(e, 'profilePic')} value={profilePic} placeholder="Profile Image URL" type="text"/>
                <input onChange={(e) => this.handleChange(e, 'password')} value={password} placeholder="Password" type="text"/>
                <button onClick={this.handleContinue}>Continue</button>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default connect(null,{setUser})(Register);