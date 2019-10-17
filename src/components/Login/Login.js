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
      <div className="box-container">
        <main className="box">
          <div className="login-header">
            <h1 id="login-title">Login</h1>
          </div>
          <form action="">
            <div className="input-box">
              <input
                onChange={e => this.handleChange(e, "username")}
                value={username}
                type="text"
              />
              <label htmlFor="">Username</label>
            </div>
            <div className="input-box">
              <input
                onChange={e => this.handleChange(e, "password")}
                value={password}
                type="text"
              />
              <label htmlFor="">Password</label>
            </div>
            <button onClick={this.handleLogin}>Submit</button>
            <button onClick={this.handleRegister}>Register</button>
          </form>
        </main>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(withRouter(Login));
