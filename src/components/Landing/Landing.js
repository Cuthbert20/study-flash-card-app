import React, { Component } from 'react'
import './Landing.scss'
import Login from '../Login/Login'

export default class Landing extends Component {
    render() {
        return(
            <main>
                <Login />
            </main>
        )
    }
}