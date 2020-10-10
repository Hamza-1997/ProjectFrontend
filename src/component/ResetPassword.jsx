
import React, { useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: 60,
    height: 60,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const ResetPassword = () => {
  const history = useHistory(); //intializing
  const classes = useStyles();
  const [name, setName] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactnumber, setContactnumber] = useState("");

  const [nameHelper, setNameHelper] = useState("");
  const [emailHelper, setemailHelper] = useState("");
  const [passwordHelper, setpasswordHelper] = useState("");
  const [contactnumberHelper, setcontactnumberHelper] = useState("");

  const [confirmpassword, setconfirmpassword] = useState("");
  const [confirmpasswordHelper, setconfirmpasswordHelper] = useState("");
  const [erro, setErro] = useState("");
  const [show, setShow] = useState(false);
  const { token } = useParams();
  console.log("yeh params wala token", token);
  const onchange = (event) => {
    let valid;
    let namevalid;

    switch (event.target.id) {
      case "password":
        setPassword(event.target.value);
        valid = /.{6,}/.test(event.target.value);
        // valid = /^{4,6}$/.test(event.target.value);

        if (valid) {
          setpasswordHelper("");
        } else if (event.target.value === "") {
          setpasswordHelper("");
        } else {
          setpasswordHelper("Your password must be at least 6 characters");
        }
        break;

      case "confirmpassword":
        setconfirmpassword(event.target.value);

        if (event.target.value === "") {
          setconfirmpasswordHelper("");
        } else if (event.target.value !== password) {
          setconfirmpasswordHelper("password didn't match");
        } else {
          setconfirmpasswordHelper("");
        }
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      password,
      token,
    };

    axios
      .post("http://localhost:5000/api/login/newpassword", data)
      .then((res) => {
        console.log(res.data);
        console.log(res);
        swal("Password updated Sucessfully ", "", "success");
        history.push("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        let err = error.response.data;

        setErro(err);

        swal(err, "", "error");
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PermIdentitySharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={passwordHelper.length !== 0}
                helperText={passwordHelper}
                type="password"
                name="password"
                label="Enter a New Password"
                id="password"
                autoComplete="off"
                onChange={onchange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={confirmpasswordHelper.length !== 0}
                helperText={confirmpasswordHelper}
                type="password"
                name="confirmpassword"
                label="ConfirmPassword"
                id="confirmpassword"
                autoComplete="off"
                onChange={onchange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            disabled={
              password.length === 0 ||
              passwordHelper.length !== 0 ||
              confirmpassword.length === 0 ||
              confirmpasswordHelper.length !== 0
            }
          >
            Update Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
