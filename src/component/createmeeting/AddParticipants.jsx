import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "date-fns";
import axios from "axios";
import swal from "sweetalert";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { useHistory, Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    [theme.breakpoints.between(0, 250)]: {
      width: 100,
    },
    [theme.breakpoints.between(251, 400)]: {
      width: 270,
    },
    [theme.breakpoints.between(500, 600)]: {
      width: 410,
    },

    [theme.breakpoints.between(600, 750)]: {
      width: 500,
    },
    [theme.breakpoints.between(750, 1100)]: {
      width: 670,
    },
    [theme.breakpoints.between(1100, 1900)]: {
      width: 750,
    },
    btnn: {
      margin: theme.spacing(3, 0, 2),
      padding: "200px",
    },
  },
}));

export default function AddParticipants(props) {
  const history = useHistory();
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const {
      name,
      email,
      meetingtitle,
      meetingtype,
      participantsemail,
      offlinelocation,
      meetingtime,
      meetingdate,
      meetingdescription,
    } = props.values;
    const data = {
      name,
      email,
      meetingtitle,
      meetingtype,
      participantsemail,
      offlinelocation,
      meetingtime,
      meetingdate,
      meetingdescription,
    };

    axios
      .post("http://localhost:5000/api/meeting", data, {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res);


        swal("Meeting created Sucessfully ", "", "success");
        history.push("/Dashboard");
      })
      .catch((error) => {
        console.log(error.response.data);
        // let err = error.response.data;

        // setErro(err);

        // swal(err, "", "error");
      });
  };

  const back = (e) => {
    e.preventDefault();
    props.previousStep();
  };


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={6}>
        <div className={classes.paper}>
          <Typography style={{ color: "#B74444" }} component="h1" variant="h4">
            Add Participants
          </Typography>

          <form className={classes.form} noValidate onSubmit={handlesubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  defaultValue={props.values.emails}
                  name="emails"
                  label="Enter Participants email"
                  type="emails"
                  id="emails"
                  autoComplete="off"
                  onChange={props.handleemails("emails")}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.btnn}
                  onClick={props.handleparticpantemailarray}
                >
                  Add
                </Button>
              </Grid>

            </Grid>

            <Grid container>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={back}
                >
                  Back
                </Button>
              </Grid>
              <Grid item xs={8}>
                {" "}
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Done
                </Button>
              </Grid>
            </Grid>
          </form>


        </div>
      </Paper>
    </Container>
  );
}
