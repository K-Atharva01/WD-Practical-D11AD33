//Server

const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 5000;

const secretKey = 'your-secret-key';

//Import Database
const appointments = require('./database/Appointment.json');
const userData = require('./database/User.json')

//Register User
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (userData.users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already in use' });
    }

    // Add the new user to the JSON data
    userData.users.push({ username, password });
    fs.writeFileSync('users.json', JSON.stringify(userData, null, 2));

    res.status(201).json({ message: 'User registered successfully' });
});


//Login User
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = userData.users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
    }

    // Generate a JWT
    const token = jwt.sign({ username }, secretKey);
    console.log(token)
    res.json({ token });
});


//Get Profile Data
app.get('/getUserData', (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        const user = userData.users.find((user) => user.username === decoded.username);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ username: user.username, email: user.email,name: user.name,age:user.age });
    });
});


//Get Schedule
app.get("/getAppointments", (req, res) => {
    res.json(appointments);

})


//New Appointment
app.post("/newAppointment", (req, res) => {
    const data = fs.readFileSync('./database/Appointment.json');
    const jsonData = JSON.parse(data);
    const requestData = req.body;
    requestData.id = jsonData.appointments.length + 1;
    console.log(requestData)

    jsonData.appointments.push(requestData);
    const jsonString = JSON.stringify(jsonData);
    fs.writeFileSync('./database/Appointment.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
    res.sendStatus(200);
})


//Listen on port
app.listen(PORT, () => {
    console.log("Listening on port 5000");
})


