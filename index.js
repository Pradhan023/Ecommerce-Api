require("dotenv").config()

const express = require("express")
const app = express()
const cors = require('cors')
const connection = require("./config/config")
const route = require("./RouteComp/routeComp")

app.use(cors({
    origin:"*",
}))

  
app.use(express.json())

app.use("/api",route)

const Port = process.env.Port || 3000;


app.listen(Port, async()=>{
    try{
        await connection()
        console.log("Server is live on Port 4000");
    }
    catch(err){
        console.log("Error Found " +err);
    }
})