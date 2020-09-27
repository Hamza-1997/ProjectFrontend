import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
//import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./component/Home";

import Signup from "./component/SignupPage";
import Login from "./component/Login";
import HomePage from "./component/Home";
import ResetDailog from "./component/Dalog";
import Snack from "./component/Snackbar";
import Alert from "./component/Alert";
import ForgetPass from "./component/Paper";
import ResetPassword from "./component/ResetPassword";
import JwtDecode from "jwt-decode";
import Dashboard from "./component/Dashboard";
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = JwtDecode(jwt);
      console.log(user);
      setUser(user);
    } catch (ex) {}
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/Dashboard"
            component={() => <Dashboard user={user} />}
          />
          <Route path="/ResetPassword/:token" component={ResetPassword} />
          <Route path="/ForgetPassword" component={ForgetPass} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      {/* <Snack /> */}
    </div>
  );
}

export default App;
