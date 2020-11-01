const handleChange = (event) => {
  setType(event.target.value);
  console.log(event.target.value);
  if (event.target.value === "offline") {
    setLoc(true);
  } else {
    setLoc(false);
  }
};

const handleClose = () => {
  setOpen(false);
  setCheckBoxDisable(false);
};
const handleDone = () => {
  setOpen(false);
  setCheckBoxDisable(true);
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

handleClose = () => {
  this.setState({ dialogopen: false });
  this.setState({ checkboxdiable: false });
  console.log("check box ki props after cancel", this.state.checkboxdiable);
};

handleDone = () => {
  this.setState({ dialogopen: false });
  this.setState({ checkboxdiable: true });
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

  if (e.target.checked === true) {
    this.setState({ dialogopen: true });
  }
};

{
  /* 
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
              </Grid> */
}

{
  /* yeh data of modal*/
}

{
  /* <Dialog
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
          </Dialog> */
}
