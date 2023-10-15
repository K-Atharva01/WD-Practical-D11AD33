//Schedule Page

import React, { useEffect, useState } from "react";

function MySchedule() {
    const[appointments,setAppointments] = useState([]);
    
    useEffect(()=>{
        fetchData();
        
    },[])

    useEffect(()=>{
        console.log(appointments);
    },[appointments])

    //Schedule GET request
    async function fetchData(){
        const response = await fetch("http://localhost:5000/getAppointments");
        const data = await response.json(); 
        console.log(data);
        console.log(appointments)
        setAppointments(data.appointments);
    }

    return (
        <div className="myschedule">
            <h1>My Schedule</h1>
            <div className="listContainer">
                {appointments && appointments.map((el)=>{
                    return <ListBox key = {el.id} name={el.name} time={el.time} reason={el.reason} />
                })}
            </div>
        </div>
    )
}

function ListBox({ name, time, reason }) {
    return (
        <div className="listbox">
            <div className="leftpart">
                <h3>Name : {name}</h3>
                <h4>Time : {time} </h4>
            </div>
            <div className="rightpart">
                <h2>Reason : {reason}</h2>
            </div>
        </div>
    )
}

export default MySchedule;