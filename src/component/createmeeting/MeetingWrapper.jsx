import React, { Component } from "react";
import MeetingCreatorDetails from "./MeetingCreatorInfo";
import MeetingDeatils from "./MeetingDetails";
import AddParticipant from "./AddParticipants";
import axios from "axios";
import swal from "sweetalert";
class UserForm extends Component {
  state = {
    step: 1,
    meetingtitle: "",
    meetingtype: "online",
    offlinelocation: "",
    meetingtime: new Date(),
    meetingdate: new Date(),
    meettime: "",
    meetingdescription: "",

    location: "",
    loactionvalue: false,
    type: "",

    participantemails: "",
    participantsemail: [],
    emails: "",
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
      this.setState({ loactionvalue: true });
      this.setState({ meetingtype: "offline" });
    } else {
      this.setState({ locationvalue: false });
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
  


  
  handleemails = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleparticpantemailarray = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const { emails } = this.state;
    const participantemails = { emails };
    console.log("participantemails", participantemails);
    axios
      .post(
        "http://localhost:5000/api/meeting/addparticipants",
        participantemails,
        {
          headers: { "x-auth-token": token },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log(res);
    

        this.setState({
          participantsemail: [...this.state.participantsemail, this.state.emails]
        })
        swal("Added Sucessfully ", "", "success");

    
      })
      .catch((error) => {
       console.log(error.response.data);
         let err = error.response.data;

         swal(err, "", "error");
      });
    
  };

  render() {
    const { step } = this.state;
    const {
      
      participantsemail,
      meetingtitle,
      meetingtype,
      offlinelocation,
      meetingtime,
      meetingdate,
      meetingdescription,
      emails,
      location,
      loactionvalue,
      type,
      participantemails,
      
    } = this.state;

    const values = {
      
      meetingtitle,
      meetingtype,
      participantsemail,
      offlinelocation,
      meetingtime,
      meetingdate,
      meetingdescription,
      location,
      loactionvalue,
      type,
      participantemails,

      emails,
    };
    switch (step) {
      
      case 1:
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
      case 2:
        return (
          <AddParticipant
            values={values}
            previousStep={this.previousStep}
            handleparticipantemail={this.handleparticipantemail}
            handleparticpantemailarray={this.handleparticpantemailarray}
            handleemails={this.handleemails}
          />
        );

      
    }
  }
}

export default UserForm;
