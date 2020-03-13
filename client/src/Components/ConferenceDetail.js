import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

import axios from "axios";
const queryString = require('query-string');



class ConferenceDetail extends Component {
  state = {
    conference: { title: "loading" }
  };


  componentDidMount() {
    console.log(this.props.match.params.id)
    this.fetchConference(this.props.match.params.id);
    console.log(this.state)

  }


  fetchConference = async (id) => {
    const res = await axios.get(
      "/api/conferences/" + id
    );
    this.setState({ conference: res });
  };


  render() {
    return (
      <div>{this.state.conference.title}</div>
    );
  }
}

export default ConferenceDetail;
