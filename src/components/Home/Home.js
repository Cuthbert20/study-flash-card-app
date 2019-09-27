import React, { Component } from 'react'
import './Home.scss'
import { connect } from 'react-redux';

export class Home extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Your Home Component</h1>
                <button>Log Out</button>
            </div>
        )
    }
}

export default connect(null,{})(Home)