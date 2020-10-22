import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Signup from "./component/SignupPage";
import Login from "./component/Login";
import HomePage from "./component/Home";

import ForgetPass from "./component/ForgetPassword";
import ResetPassword from "./component/ResetPassword";
import JwtDecode from "jwt-decode";
import Dashboard from "./component/Dashboard";
import MeetingWrapper from "./component/createmeeting/MeetingWrapper";
import MeetingSchduled from './component/MeetingDetails/SchduledMeetingDetails';
import UpcomingMeeting from './component/MeetingDetails/UpcomingMeetings';
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
          <Route path="/createmeeting" component={MeetingWrapper} />
          <Route path="/MyMeetings" component={MeetingSchduled} />
          <Route path="/UpcomingMeetings" component={()=><UpcomingMeeting user={user}/>} />
          <Route path="/ResetPassword/:token" component={ResetPassword} />
          <Route path="/ForgetPassword" component={ForgetPass} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
