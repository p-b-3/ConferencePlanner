import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// import React, { Component } from "react";
//
// class Conferences extends Component {
//   render() {
//     return (
//       <div>
//         {this.props.conferenceList.map(conference => {
//           console.log(conference.title);
//           return <p> {conference.title} </p>;
//         })}
//       </div>
//     );
//   }
// }
