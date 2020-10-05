import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    backgroundColor: "#F9EFEF",
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
}));

export default function Creator(props) {
  const continuee = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={6}>
        <div className={classes.paper}>
          <Typography style={{ color: "#B74444" }} component="h1" variant="h4">
            Enter Your Details
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="name"
                  label="Enter your Name"
                  type="name"
                  id="name"
                  onChange={props.handleMeetingdetails("name")}
                  defaultValue={props.values.name}
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Enter your Email Address"
                  name="email"
                  onChange={props.handleMeetingdetails("email")}
                  defaultValue={props.values.email}
                  autoComplete="off"
                />
              </Grid>
            </Grid>

            <Grid container justify="flex-end">
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={continuee}
                  className={classes.submit}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Container>
  );
}
