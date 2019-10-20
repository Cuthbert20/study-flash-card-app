import React, { Component } from "react";
import "../Login/Login.scss";
import { connect } from "react-redux";
import { setUser } from "../../ducks/reducer";
import axios from "axios";

export class Register extends Component {
  state = {
    profilePic: "",
    username: "",
    email: "",
    password: ""
  };
  handleBack = () => {
    this.props.history.push("/");
  };
  handleContinue = async () => {
    //need to set state and use this.props.setUser and push with history.
    const { profilePic, username, email, password } = this.state;
    let res = await axios.post("/auth/register", {
      user_email: email,
      username,
      user_img: profilePic,
      hash: password
    });
    console.log(res.data);
    //using reducer to set redux state.
    this.props.setUser({
      user_email: email,
      user_img: profilePic,
      username,
      user_password: password
    });
    this.props.history.push("/home");
  };
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  render() {
    // console.log(this.props)
    const { email, username, profilePic, password } = this.state;
    return (
      <div className="box-container">
        <main className="box">
          <div className="login-header">
            <h1 id="login-title">Register</h1>
          </div>
          <form>
            <div className="input-box">
              <input
                onChange={e => this.handleChange(e, "email")}
                value={email}
                type="email"
              />
              <label htmlFor="">Email</label>
            </div>
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
                onChange={e => this.handleChange(e, "profilePic")}
                value={profilePic}
                type="text"
              />
              <label htmlFor="">Profile Image</label>
            </div>
            <div className="input-box">
              <input
                onChange={e => this.handleChange(e, "password")}
                value={password}
                type="text"
              />
              <label htmlFor="">Password</label>
            </div>
            <button className="cred-btn" onClick={this.handleContinue}>
              Continue
            </button>
            <button className="cred-btn" onClick={this.handleBack}>
              Back
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default connect(
  null,
  { setUser }
)(Register);
