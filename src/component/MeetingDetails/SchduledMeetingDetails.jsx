import React from "react";
import { useState } from "react";
import Card from "./Cardsa";
import axios from "axios";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}));

const MyMeetings = () => {
  const [schmeet, SetSchMeet] = useState([]);

  const getData = () => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/meeting/ScheduledMeeting", {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        SetSchMeet(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(getData, []);
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.root}>
        {/* <Grid item xs={4}></Grid> */}
        <Grid item md={12} className="text-center">
          <h1>My Meetings</h1>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={2}>
        {/* <Grid item xs={2}></Grid> */}

        {schmeet.map((meeting, index) => (
          <Grid item md={6}>
            <Card meeting={meeting} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyMeetings;
