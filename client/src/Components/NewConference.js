import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewConference extends Component {
  state = {
    title: "",
    sales_goal: "",
    sales_current: "",
    attendance_goal: "",
    attendance_current: "",
    oc_call_compelted: "",
    website_compelted: "",
    prospectus_compelted: "",
    oc_sent_all_info: "",
    contacted_industrial_attendees: "",
    competitive_events_analyzed: "",
    leads_from_competitive_events: "",
    indsutrial_oc_outreach_completed: "",
    iformz_campaign_sent: "",
    sales_lead: "",
    te_lead :"",
    marketing_lead: "",
    startdate: ""
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    axios.post("api/conferences",
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

            <label>Enter conference name</label>
            <input
              type="text"
              value={this.state.title}
              name = "name"
              onChange = {this.onInputChange}
            />

            <label>Current Sales</label>
            <input
              type="number"
              value={this.state.sales_current}
              name = "sales_current"
              onChange = {this.onInputChange}
            />

            <label>Sales Goal</label>
            <input
              type="number"
              value={this.state.sales_goal}
              name = "sales_goal"
              onChange = {this.onInputChange}
            />

            <label>Current Attendance</label>
            <input
              type="number"
              value={this.state.attendance_current}
              name = "attendance_current"
              onChange = {this.onInputChange}
            />

            <label>Attendance Goal</label>
            <input
              type="number"
              value={this.state.attendance_current}
              name = "attendance_current"
              onChange = {this.onInputChange}
            />

            <label>Compelted website?</label>
            <input
              type="number"
              value={this.state.website_compelted}
              name = "website_compelted"
              onChange = {this.onInputChange}
            />

            <label>Compelted Prospectus?</label>
            <input
              type="number"
              value={this.state.prospectus_compelted}
              name = "prospectus_compelted"
              onChange = {this.onInputChange}
            />

            <label>Compelted O.C. Call?</label>
            <input
              type="number"
              value={this.state.oc_call_compelted}
              name = "oc_call_compelted"
              onChange = {this.onInputChange}
            />


            







            <button className="ui green button">Submit</button>
          </form>
        </div>
      );
    }
}

export default NewConference;
