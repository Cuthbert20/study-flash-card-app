import React, { Component } from "react";
import "./Home.scss";
import { connect } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../ducks/reducer";
import Cards from "../Cards/Cards";

export class Home extends Component {
  state = {
    topics: [],
    topic: null
  };
  componentDidMount() {
    this.allTopics();
  }
  handleLogout = async () => {
    await axios.post("/auth/logout");
    this.props.logoutUser();
    this.props.history.push("/");
  };
  allTopics = async () => {
    const result = await axios.get("/api/card/topics");
    this.setState({
      topics: result.data
    });
  };
  handleSelect = res => {
    this.setState({
      topic: res.target.value
    });
  };
  handleClick = elm => {};
  render() {
    const { user_id, user_img, username } = this.props;
    const { topics } = this.state;
    console.log(this.state.topic);
    let allTopics = topics.map((elm, index) => {
      return (
        <option key={elm.topic_id} value={elm.topic_id}>
          {elm.topic_name}
        </option>
      );
    });
    return (
      <div className="profile-container">
        <h1 className="Home__username">{username}</h1>
        <img src={user_img} alt="" className="profile-img" />
        <button className="btn--out" onClick={this.handleLogout}>
          Log Out
        </button>
        <main className="select-topic-main">
          <select
            name="topics"
            value={this.state.topic}
            onChange={e => this.handleSelect(e)}
          >
            <option value="">Select Topic</option>
            {allTopics}
          </select>
        </main>
        <button className="btn--topic">Load Study Cards</button>
        <section className="Home__cards--container">
          <Cards topicId={this.state.topic} />
        </section>
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
