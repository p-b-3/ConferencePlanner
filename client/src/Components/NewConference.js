import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewConference extends Component {
  state = {
    name: "",
    email : ""
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    axios.post("http://127.0.0.1:8000/events/people?format=json",
    this.state).then((response) => {
    console.log(response);

    }, (error) => {
      console.log(error);
    });
  }

  // onInputChange = (e) => {
  //   this.setState({ name: e.target.value});
  //   console.log(this.state);
  // }
  onInputChange = (event) => {
    const value =  event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  render() {
    return (
        <div className = "ui container ">
          <form className="ui form" onSubmit = {this.onFormSubmit}>
            <label>Enter name</label>

            <input
              type="text"
              value={this.state.name}
              name = "name"
              onChange = {this.onInputChange}
            />

            <label>Email</label>
            <input
              type="email"
              value={this.state.email}
              name = "email"
              onChange = {this.onInputChange}
            />
            
            <button className="ui green button">Submit</button>
          </form>
        </div>
      );
    }
}

export default NewConference;
