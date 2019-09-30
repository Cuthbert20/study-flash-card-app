import React from 'react';
import './App.css';
import routes from './routes'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from "./ducks/reducer"

export class App extends React.Component {
  componentDidMount() {
    this.getSession();
  }
  getSession = () => {
    try {
      axios.get('/auth/session').then(res => {
        if(res.data.user) {
          const {
            user_id,
            user_email,
            username,
            user_img
          } = res.data.user;
          this.props.setUser({
            user_id,
            user_email,
            username,
            user_img
          })
        }
      })
    }
    catch {
      alert("404 internal server error")
    }
  }
  render(){
    return (
      <div>
        {routes}
      </div>
    );
  }

}

export default connect(null,{setUser})(withRouter(App));
