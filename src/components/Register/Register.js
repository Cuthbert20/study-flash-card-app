import React, { Component } from 'react'
import './Register.scss'
import { connect } from 'react-redux'

export class Register extends Component{
    state ={

    }
    handleBack = () => {
        this.props.history.push('/')
    }
    render(){
        return(
            <div>
                <h1>Register Component</h1>
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default connect(null,{})(Register);