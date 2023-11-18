require("dotenv").config();

const express = require("express")
const app = express()
const cors = require('cors')
const connection = require("./config/config")
const route = require("./RouteComp/routeComp")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(express.json())

app.use("/api",route)

const Port = 4000;


app.listen(Port, async ()=>{
    try{
        await connection(process.env.MongoDb_URl)
        console.log("Server is live on Port 4000");
    }
    catch(err){
        console.log("Error Found " +err);
    }
})