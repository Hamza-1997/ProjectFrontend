import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import PermIdentitySharpIcon from "@material-ui/icons/PermIdentitySharp";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, Link } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import Switch from "./Swicth";
import swal from "sweetalert";
import Paper from "@material-ui/core/Paper";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "3px solid grey",
    borderRadius: "1em",
    paddingTop: "2em",
    paddingBottom: "2em",
    paddingLeft: "2em",
    paddingRight: "2em",
    background: "white",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

    page: {},
  },
}));

const Login = () => {
  const history = useHistory(); //intializing
  const classes = useStyles();
  const [name, setName] = useState("");

  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("noumansaeed831@gmail.com");
  const [password, setPassword] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [profession, setProfession] = useState("");

  const [emailHelper, setemailHelper] = useState("");
  const [passwordHelper, setpasswordHelper] = useState("");

  const [loginname, setLoginname] = useState("User");
  const onchange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          event.target.value
        );
        if (valid) {
          setemailHelper("");
        } else if (event.target.value === "") {
          setemailHelper("");
        } else {
          setemailHelper("invalid email");
        }
        break;

      case "password":
        setPassword(event.target.value);
    }
  };

  const handlename = (Value) => {
    console.log("yeh props", Value);
    if (Value === true) {
      setLoginname("User");
    } else if (Value === false) {
      return setLoginname("Admin");
    } else {
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    if (email === "noumansaeed831@gmail.com" && loginname === "User") {
      swal("Please use Admin Login", "", "error");
    } else if (loginname === "Admin" && email !== "noumansaeed831@gmail.com") {
      swal("Please use User Login", "", "error");
    } else {
      console.log(email);
      axios
        .post("http://localhost:5000/api/login", data)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data);

          window.location = "/Dashboard";
        })
        .catch((error) => {
          console.log(error.response.data);
          swal(error.response.data, "", "error");
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PermIdentitySharpIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {loginname} Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                onChange={onchange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                error={passwordHelper.length !== 0}
                helperText={passwordHelper}
                name="password"
                label="Password"
                id="password"
                autoComplete="off"
                onChange={onchange}
              />
            </Grid>
            <Grid item>
              <Switch onSelectLanguage={handlename} />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            disabled={
              emailHelper.length !== 0 ||
              email.length === 0 ||
              password.length === 0
            }
          >
            Login
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/ForgetPassword" variant="body2">
                Forget Password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
