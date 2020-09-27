import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
const Dashboard = (props) => {
  const fetchuser = () => {
    // const headers = {
    //   "x-auth-token": localStorage.getItem(token),
    // };
    axios
      .get("http://localhost:5000/api/users/me")
      .then((res) => {
        console.log(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
        let err = error.response.data;

        alert(err);
      });
  };

  const handleclick = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div>
      <h1>Welcome to {props.user.Role} dashbaord</h1>
      <h5>id:{props.user._id} :</h5>
      <h5>Role:{props.user.Role}</h5>
      <h4>Name:{props.user.name}</h4>
      <h4>Email:{props.user.email}</h4>
      <Button onClick={handleclick}>Logout</Button>
      <Button onClick={fetchuser}>Get User info</Button>
    </div>
  );
};

export default Dashboard;
