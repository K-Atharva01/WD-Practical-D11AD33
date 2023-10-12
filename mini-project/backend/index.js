const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const appointments = require('./database/Appointment.json');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 5000;

app.get("/getAppointments", (req, res) => {
    res.json(appointments);

})

app.post("/newAppointment", (req, res) => {
    const data = fs.readFileSync('./database/Appointment.json');
    const jsonData = JSON.parse(data);
    const requestData = req.body;
    requestData.id = jsonData.appointments.length +1;
    console.log(requestData)
    
    jsonData.appointments.push(requestData);
    const jsonString = JSON.stringify(jsonData);
    fs.writeFileSync('./database/Appointment.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log("Listening on port 5000");
})


