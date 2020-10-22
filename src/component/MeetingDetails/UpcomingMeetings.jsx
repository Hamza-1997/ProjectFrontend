import React from 'react';
import { useState } from "react";
 import Card from './Card';
 import axios from "axios";
 import { useEffect } from "react";
 import { makeStyles } from '@material-ui/core/styles';
 import Paper from "@material-ui/core/Paper";

 import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
 import Button from '@material-ui/core/Button';
 import Typography from '@material-ui/core/Typography';
 import Container from "@material-ui/core/Container";
 import Grid from "@material-ui/core/Grid";
  const useStyles = makeStyles((theme) => ({
//     paper: {
//         marginTop: theme.spacing(1),
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: theme.spacing(2),
//         width:500
//       },
     root: {
       marginTop: theme.spacing(4),
       display: "flex",
       flexDirection: "row",
       alignItems: "center",
       padding: theme.spacing(1),
       marginBottom:theme.spacing(4)
     },
   
     roott: {
      
      display: "flex",
      //flexDirection: "row",
      alignItems: "center",
      
      
    },
  

   }));



 const UpcomingMeetings = (props) => {
    const[schmeet,SetSchMeet]=useState([]);
        



    const getData=()=>{
        const token = localStorage.getItem("token");
        axios.get('http://localhost:5000/api/meeting/upcomingMeeting',{
            headers: { "x-auth-token": token },
          }).then((res)=>{
            console.log(res.data);
            const data=res.data
            SetSchMeet(data);
        }).catch((err)=>{
            console.log(err.response.data)

        })
    }

    const updateData=(id)=>{
        const token = localStorage.getItem("token");
    axios.put(`http://localhost:5000/api/meeting/upcomingMeeting/acceptmeeting/${id}`,{ },
    {headers: { "x-auth-token": token },
      }).then((res)=>{
        console.log(res.data);
        getData();
    }).catch((err)=>{
        console.log(err.response.data)

    })}

    const updateDataa=(id)=>{
        const token = localStorage.getItem("token");
    axios.put(`http://localhost:5000/api/meeting/upcomingMeeting/rejectmeeting/${id}`,{ },
    {headers: { "x-auth-token": token },
      }).then((res)=>{
        console.log(res.data);
        getData();
        
    }).catch((err)=>{
        console.log(err.response.data)

    })}
    
    useEffect(getData,[]);
    const classes = useStyles();
return ( <div>

<Grid container className={classes.root}>
<Grid item xs={4}></Grid>
    <Grid item xs={7}><h1>upcoming meetings</h1></Grid>
    </Grid>

  
    <Grid container className={classes.roott}>
<Grid item xs={2}></Grid>

<Grid item xs={10}>
    {schmeet.map((meeting,index) =>  ( meeting.participantsemail.map((arr,index)=>
    {if (arr.emails === props.user.email && arr.meetingrejectecheck !== true ){
        
        return <Card meeting={meeting} 
    participantsemail={arr} user={props.user} updateData={updateData} updateDataa={updateDataa} key={index} />}}   )))}
           </Grid>
          
           </Grid>
           </div> );
}
 
export default UpcomingMeetings;