import React, { Component } from "react";
import MeetingCreatorDetails from "./MeetingCreatorInfo";
import MeetingDeatils from "./MeetingDetails";
import AddParticipant from "./AddParticipants";

class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    meetingtitle: "",
    meetingtype: "online",
    offlinelocation: "",
    meetingtime: new Date(),
    meetingdate: new Date("2020-05-10T21:11:54"),
    meettime: "",
    meetingdescription: "",

    location: false,
    loactionvalue: "",
    type: "",

    participantemail: "",
    remindertitle: "",
    reminderdate: new Date(),
    remindertime: new Date(),
    dialogopen: false,
    checkbox: false,
    checkboxdiable: false,
  };
  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //yeh meeting k liye name galat hogae
  handleChangeMeetingCreator = (input) => (e) => {
    this.setState({ [input]: e.target.value });

    if (e.target.value === "offline") {
      this.setState({ location: true });
      this.setState({ meetingtype: "offline" });
    } else {
      this.setState({ location: false });
    }
  };

  handleChangeMeetingTitle = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handlelocationvalue = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  //yehMeeting creator k liye
  handleMeetingdetails = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleparticipant = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleTimeChange = (time) => {
    this.setState({ meetingtime: time });
  };

  handleDateChange = (date) => {
    this.setState({ meetingdate: date });
  };

  handlemeetingdate = (value) => {
    this.setState({ meetingdate: value });
  };

  handleChangeMeetingdescription = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handlemeetingtime = (value) => {
    this.setState({ meetingtime: value });
  };
  handleparticipantemail = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleCheckboxChange = (input) => (e) => {
    console.log("checkbox", e.target.checked);
    if (e.target.checked === false) {
      this.setState({ checkboxdiable: false });
    } else if (e.target.checked === true) {
      this.setState({ checkboxdiable: true });
      console.log(
        "checked box ki value after checking ",
        this.state.checkboxdiable
      );
    }
    this.setState({ checkbox: e.target.checked });
    // console.log("state of check box", this.state.checkbox);
    // console.log("state of check box", this.state.dialogopen);
    if (e.target.checked === true) {
      this.setState({ dialogopen: true });
      // console.log("dialog open", this.state.dialogopen);
    }
  };

  handleClose = () => {
    this.setState({ dialogopen: false });
    this.setState({ checkboxdiable: false });
    console.log("check box ki props after cancel", this.state.checkboxdiable);
  };

  handleDone = () => {
    this.setState({ dialogopen: false });
    this.setState({ checkboxdiable: true });
  };

  handleremindertitle = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleremindertime = (value) => {
    this.setState({ remindertime: value });
  };

  handlereminderdate = (value) => {
    this.setState({ reminderdate: value });
  };
  render() {
    const { step } = this.state;
    const {
      name,
      email,
      meetingtitle,
      meetingtype,
      offlinelocation,
      meetingtime,
      meetingdate,
      meetingdescription,

      location,
      loactionvalue,
      type,
      participantemail,
      remindertitle,
      reminderdate,
      remindertime,
      dialogopen,
      checkbox,
      checkboxdiable,
    } = this.state;

    const values = {
      name,
      email,
      meetingtitle,
      meetingtype,
      offlinelocation,
      meetingtime,
      meetingdate,
      meetingdescription,
      location,
      loactionvalue,
      type,
      participantemail,
      remindertitle,
      reminderdate,
      remindertime,
      dialogopen,
      checkbox,
      checkboxdiable,
    };
    switch (step) {
      case 1:
        return (
          <MeetingCreatorDetails
            nextStep={this.nextStep}
            handleMeetingdetails={this.handleMeetingdetails}
            values={values}
          />
        );
      case 2:
        return (
          <MeetingDeatils
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChangeMeetingCreator={this.handleChangeMeetingCreator}
            handleChangeMeetingdescription={this.handleChangeMeetingdescription}
            handleChangeMeetingTitle={this.handleChangeMeetingTitle}
            handlelocationvalue={this.handlelocationvalue}
            handlemeetingtime={this.handlemeetingtime}
            handlemeetingdate={this.handlemeetingdate}
            values={values}
          />
        );
      case 3:
        return (
          <AddParticipant
            values={values}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleparticipantemail={this.handleparticipantemail}
            handleCheckboxChange={this.handleCheckboxChange}
            handleClose={this.handleClose}
            handleDone={this.handleDone}
            handleremindertitle={this.handleremindertitle}
            handleremindertime={this.handleremindertime}
            handlereminderdate={this.handlereminderdate}
          />
        );

      case 4:
        return (
          <div>
            {/* jsiojs */}
            {/* <h1>meeting date is{meetingdate.toDateString()}</h1>
            <h1>meeting creater name is{name}</h1>
            <h2>meeting creater email is{email}</h2>
            <h3>meeting creater meeting title is{meetingtitle}</h3> */}
            <h4>meeting creater name is{meetingtype}</h4>
            {/* <h5>meetingtime is{meetingtime.toLocaleTimeString()}</h5>
            <h1>meeting description is{meetingdescription}</h1>
            <h1>meeting location is{loactionvalue}</h1>
            <h1>participant email is is{participantemail}</h1> */}
            <h1>reminder title is{remindertitle}</h1>
            {/* <h1>meeting reminder date is{reminderdate.toDateString()}</h1>
            <h1>reminder time is{remindertime.toLocaleTimeString()}</h1> */}
          </div>
        );
    }
  }
}

export default UserForm;
