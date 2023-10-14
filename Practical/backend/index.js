const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const data = require("./Database/data.json");

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/getUpdates",(req,res) =>{
    res.json(data);
})

app.listen(PORT,()=>{
    console.log("Listening on port 5000")
})