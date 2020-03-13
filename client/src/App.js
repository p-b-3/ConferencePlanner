import React, { Component } from "react";

import axios from "axios";
import Conferences from "./Conferences";
import ConferenceDetail from "./ConferenceDetail";
import NewConference from "./NewConference"
import Header from "./Header"
import {
  BrowserRouter,
  // Switch,
  Route,
  // Link,
  // useParams
} from "react-router-dom";

class App extends Component {
  state = {
    conferenceList: []
  };

  componentDidMount() {
    this.fechConferences();
  }

  fechConferences = async () => {
    const res = await axios.get("http://127.0.0.1:8000/events/?format=json");
    this.setState({ conferenceList: res.data });
    // console.log(this.state);
  };



  render() {
    return (

      <div className ="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route
              exact={true}
              path="/conferences"
              render={routeProps => (
                <Conferences
                  {...routeProps}
                  conferenceList={this.state.conferenceList}
                />
              )}
            />
            <Route path="/conferences/:id"  component = {ConferenceDetail} />
            <Route path="/new" exact component = {NewConference} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
