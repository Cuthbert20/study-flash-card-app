import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../ducks/reducer";

export class Home extends Component {
  handleLogout = async () => {
    await axios.post("/auth/logout");
    this.props.logoutUser();
    this.props.history.push("/");
  };
  render() {
    console.log(this.props);
    const { user_id, user_img, username } = this.props;
    return (
      <div className="profile-container">
        <h1>{username}</h1>
        <img src={user_img} alt="" className="profile-img" />
        <button className="out-btn" onClick={this.handleLogout}>
          Log Out
        </button>
        {/* create deck of cards using react-spring, each card displaying a topic
                if swipe right it opens the topic, then the topic component will render based on
                which card is swiped right topic_id. Then a grid of cards where the question is displayed
                and the answer will be shown on click with a modal or sweetalert2 */}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  const { user_id, user_img, username } = reduxState;
  return {
    user_id,
    user_img,
    username
  };
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(Home);
