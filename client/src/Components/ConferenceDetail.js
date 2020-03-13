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

    this.fetchConference(this.props.match.params.id);

  }


  fetchConference = async (id) => {
    const res = await axios.get(
      `http://127.0.0.1:8000/events/${id}?format=json`
    );
    this.setState({ conference: res.data });

  };

  render() {
    return (
      <div>{this.state.conference.title}</div>
    );
  }
}

export default ConferenceDetail;
