import React from "react";
import { useState } from "react";
import Card from "./Cardsa";
import axios from "axios";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  //     paper: {
  //         marginTop: theme.spacing(1),
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         padding: theme.spacing(2),
  //         width:500
  //       },
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },

  roott: {
    display: "flex",
    //flexDirection: "row",
    alignItems: "center",
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
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={4}></Grid>
        <Grid item xs={7}>
          <h1>My Meetings</h1>
        </Grid>
      </Grid>

      <Grid container className={classes.roott}>
        <Grid item xs={2}></Grid>

        <Grid item xs={10}>
          {schmeet.map((meeting, index) => (
            <Card meeting={meeting} key={index} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MyMeetings;
