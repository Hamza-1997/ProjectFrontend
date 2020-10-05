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
  const [checkbox, setCheckBox] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [checkboxdisable, setCheckBoxDisable] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(new Date());

  const handlesubmit = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.previousStep();
  };

  const handleClose = () => {
    setOpen(false);
    setCheckBoxDisable(false);
  };
  const handleDone = () => {
    setOpen(false);
    setCheckBoxDisable(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleCheckboxChange = (event) => {
    console.log("checkbox", event.target.checked);
    if (event.target.checked === false) {
      setCheckBoxDisable(false);
    } else if (event.target.checked === true) {
      setCheckBoxDisable(true);
    }
    setCheckBox(event.target.checked);
    console.log("state of check box", checkbox);
    if (event.target.checked === true) {
      setOpen(true);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={6}>
        <div className={classes.paper}>
          <Typography style={{ color: "#B74444" }} component="h1" variant="h4">
            Add Participants
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  defaultValue={props.values.participantemail}
                  name="participantemail"
                  label="Enter Participants email"
                  type="participantemail"
                  id="participantemail"
                  autoComplete="off"
                  onChange={props.handleparticipantemail("participantemail")}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.btnn}
                >
                  Add
                </Button>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  size="medium"
                  checked={props.values.checkboxdiable}
                  name="checkbox"
                  id="checkbox"
                  control={<Checkbox color="primary" />}
                  label="Set Reminder"
                  labelPlacement="start"
                  onChange={props.handleCheckboxChange("checkbox")}
                />
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
                  onClick={handlesubmit}
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

          {/* yeh data of modal*/}

          <Dialog
            open={props.values.dialogopen}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Set Reminder</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter Reminder Details</DialogContentText>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  name={"remindertitle"}
                  margin="dense"
                  id="title"
                  label="title"
                  type="title"
                  fullWidth
                  onChange={props.handleremindertitle("remindertitle")}
                />
              </Grid>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date"
                    format="MM/dd/yyyy"
                    onChange={props.handlereminderdate}
                    value={props.values.reminderdate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time"
                    onChange={props.handleremindertime}
                    value={props.values.remindertime}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={props.handleDone} color="primary">
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Paper>
    </Container>
  );
}
