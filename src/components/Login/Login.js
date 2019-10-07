import React, { Component } from "react";
import axios from "axios";
import "./Login.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "../../ducks/reducer";

export class Login extends Component {
  state = {
    profilePic: "",
    username: "",
    email: "",
    password: ""
  };
  handleRegister = () => {
    this.props.history.push("/register");
  };
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  handleLogin = async () => {
    const { username, password } = this.state;
    //result is user on session
    let result = await axios
      .post("/auth/login", { username, password })
      .then(res => {
        // console.log(this.props)

        const { username, user_img, user_email, user_id } = res.data.user;
        this.props.setUser({
          user_email,
          username,
          user_img,
          user_id
        });
        this.props.history.push("/home");
      })
      .catch(err => {
        console.log(err, "login error");
      });
  };
  //handleLogin method will also use setUser Reducer set redux state.
  render() {
    const { username, password } = this.state;
    // console.log(this.props);
    return (
      <main className="login-main">
        <div className="login-header">
          <h1 id="login-title">Login</h1>
        </div>
        <div className="login-body">
          <input
            onChange={e => this.handleChange(e, "username")}
            value={username}
            placeholder="username"
            type="text"
          />
          <input
            onChange={e => this.handleChange(e, "password")}
            value={password}
            placeholder="password"
            type="text"
          />
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </div>
      </main>
    );
  }
}

export default connect(
  null,
  { setUser }
)(withRouter(Login));
