//History.js

import React, { useEffect, useState } from "react";

function History() {
    const[updates,setUpdates] = useState([]);
    
    useEffect(()=>{
        fetchData();
        
    },[])

    useEffect(()=>{
        console.log(updates);
    },[updates])

    async function fetchData(){
        const response = await fetch("http://localhost:5000/getUpdates");
        const data = await response.json(); 
        console.log(data);
        console.log(updates)
        setUpdates(data.history);
    }

    return (
        <div className="myschedule">
            <h1>New Updates</h1>
            <div className="listContainer">
                {updates && updates.map((el)=>{
                    return <ListBox subject={el.subject} date={el.date} info={el.info} />
                })}
            </div>
        </div>
    )
}

function ListBox({ subject, date, info }) {
    return (
        <div className="listbox">
            <div className="leftpart">
                <h3>Subject : {subject}</h3>
                <h4>Date : {date} </h4>
            </div>
            <div className="rightpart">
                <h2>Update : {info}</h2>
            </div>
        </div>
    )
}

export default History;