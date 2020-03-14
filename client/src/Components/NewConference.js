import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewConference extends Component {
  state = {
    title: "",
    sales_goal: 0,
    sales_current: 0,
    attendance_goal: 0,
    attendance_current: 0,
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
    marketing_lead: ""
    // startdate: ""
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    axios.post("/api/conferences",
    this.state).then((response) => {
    console.log(response);

    }, (error) => {
      console.log(error);
    });
  }


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
              name = "title"
              onChange = {this.onInputChange}
            />

            // <label>Start Date</label>
            // <input
            //   type="text"
            //   value={this.state.startdate}
            //   name = "startdate"
            //   onChange = {this.onInputChange}
            // />


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
              value={this.state.attendance_goal}
              name = "attendance_goal"
              onChange = {this.onInputChange}
            />

            <label>Compelted website?</label>
            <input
              type="text"
              value={this.state.website_compelted}
              name = "website_compelted"
              onChange = {this.onInputChange}
            />

            <label>Compelted Prospectus?</label>
            <input
              type="text"
              value={this.state.prospectus_compelted}
              name = "prospectus_compelted"
              onChange = {this.onInputChange}
            />

            <label>Compelted O.C. Call?</label>
            <input
              type="text"
              value={this.state.oc_call_compelted}
              name = "oc_call_compelted"
              onChange = {this.onInputChange}
            />

            <label>O.C. sent all info?</label>
            <input
              type="text"
              value={this.state.oc_sent_all_info}
              name = "oc_sent_all_info"
              onChange = {this.onInputChange}
            />

            <label>Contacted Indsutrial Attendees?</label>
            <input
              type="text"
              value={this.state.contacted_industrial_attendees}
              name = "contacted_industrial_attendees"
              onChange = {this.onInputChange}
            />

            <label>Competitive Events Analyzed?</label>
            <input
              type="text"
              value={this.state.competitive_events_analyzed}
              name = "competitive_events_analyzed"
              onChange = {this.onInputChange}
            />

            <label>Leads Competitive Events?</label>
            <input
              type="text"
              value={this.state.leads_from_competitive_events}
              name = "leads_from_competitive_events"
              onChange = {this.onInputChange}
            />

            <label>Industrial O.C. Outreach Completed?</label>
            <input
              type="text"
              value={this.state.indsutrial_oc_outreach_completed}
              name = "indsutrial_oc_outreach_completed"
              onChange = {this.onInputChange}
            />

            <label>Informz Campaing Sent?</label>
            <input
              type="text"
              value={this.state.iformz_campaign_sent}
              name = "iformz_campaign_sent"
              onChange = {this.onInputChange}
            />

            <label>Sales Lead</label>
            <input
              type="text"
              value={this.state.sales_lead}
              name = "sales_lead"
              onChange = {this.onInputChange}
            />

            <label>Marketing Lead</label>
            <input
              type="text"
              value={this.state.marketing_lead}
              name = "marketing_lead"
              onChange = {this.onInputChange}
            />

            <label>TE Lead</label>
            <input
              type="text"
              value={this.state.te_lead}
              name = "te_lead"
              onChange = {this.onInputChange}
            />



            <button className="ui green button">Submit</button>
          </form>
        </div>
      );
    }
}

export default NewConference;
