import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = (props) => {
  const fetchuser = () => {
    // const headers = {
    //   "x-auth-token": localStorage.getItem(token),
    // };s
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/users/me", {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
        let err = error.response.data;

        alert(err);
      });
  };

  const handleclick = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to {props.user.Role} dashboard</h1>
          <h5>id: {props.user._id}</h5>
          <h5>Role: {props.user.Role}</h5>
          <h4>Name: {props.user.name}</h4>
          <p>Email: {props.user.email}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="contained" color="secondary" onClick={handleclick}>
            Logout
          </Button>
          <Button variant="contained" onClick={fetchuser}>
            Get User info
          </Button>
          <Link to="/createmeeting">
            <Button variant="contained">Create Meeting</Button>
          </Link>

          <Link to="/MyMeetings">
            <Button variant="contained"> My Meetings</Button>
          </Link>
          <Link to="/UpcomingMeetings">
            <Button variant="contained"> Upcoming Meetings</Button>{" "}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
