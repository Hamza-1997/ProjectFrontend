import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },

  form: {
    width: "100%",
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
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  area: {
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
  },

  TextField: {
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
  },
}));

export default function MeetingDetails(props) {
  const [type, setType] = React.useState("");
  const [location, setLoc] = React.useState(false);

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
            Enter Meeting Details
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  className={classes.TextField}
                  name="meetingtitle"
                  label="Enter Meeting Title"
                  type="meetingtitle"
                  id="meetingtitle"
                  onChange={props.handleChangeMeetingTitle("meetingtitle")}
                  defaultValue={props.values.meetingtitle}
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.values.type}
                    onChange={props.handleChangeMeetingCreator("type")}
                    label="type"
                    fullWidth
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="offline">offline</MenuItem>
                    <MenuItem value="online">online</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {props.values.loactionvalue && (
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    className={classes.TextField}
                    name="offlinelocation,"
                    label="Enter Location"
                    type="offlinelocation,"
                    onChange={props.handlelocationvalue("offlinelocation")}
                    id="offlinelocation,"
                    autoComplete="off"
                    defaultValue={props.values.offlinelocation}
                  />
                </Grid>
              )}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={4}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date"
                    format="MM-dd-yyyy"
                    onChange={props.handlemeetingdate}
                    value={props.values.meetingdate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  {" "}
                </Grid>

                <Grid item xs={4}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time"
                    value={props.values.meetingtime}
                    onChange={props.handlemeetingtime}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <Grid item xs={12}>
                <TextareaAutosize
                  className={classes.area}
                  aria-label="minimum height"
                  rowsMin={6}
                  placeholder="Enter Description"
                  defaultValue={props.values.meetingdescription}
                  onChange={props.handleChangeMeetingdescription(
                    "meetingdescription"
                  )}
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                {" "}
              </Grid>
              <Grid item xs={2}>
                <Button
                  type="submit"
                  onClick={continuee}
                  fullWidth
                  variant="contained"
                  color="primary"
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
