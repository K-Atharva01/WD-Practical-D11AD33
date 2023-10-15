const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');
const admin = require('firebase-admin');

const PORT = 5000;

// const serviceAccount = require('./Firebase.js')

const data = require("./Database/data.json");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/getUpdates",(req,res) =>{
    res.json(data);
})

app.post("/postUpdate", (req, res) => {
    const data = fs.readFileSync('./Database/data.json');
    const jsonData = JSON.parse(data);
    const requestData = req.body;
    requestData.id = jsonData.updates.length +1;
    requestData.date = "test";
    requestData.time = "test";
    console.log(requestData)
    
    jsonData.updates.push(requestData);
    const jsonString = JSON.stringify(jsonData);
    fs.writeFileSync('./Database/data.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
    res.sendStatus(200);
})

app.listen(PORT,()=>{
    console.log("Listening on port 5000")
})