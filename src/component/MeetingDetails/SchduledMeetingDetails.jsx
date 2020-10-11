import React from 'react';
import { useState } from "react";
 import Card from './Card';
 import axios from "axios";
 import { useEffect } from "react";
const SchduledMeetingDetails = () => {
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
    useEffect(getData,[])
return ( <div>{schmeet.map((meeting) => (
             <Card meeting={meeting} />
           ))}</div> );
}
 
export default SchduledMeetingDetails;