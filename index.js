require("dotenv").config();

const express = require("express")
const app = express()
const cors = require('cors')

const Port  = 4000

app.use(cors({
    origin:"*"
}))

const connection = require("./config/config")


const route = require("./RouteComp/routeComp")

app.use(express.json())

app.use("/api",route)


app.listen(Port, async ()=>{
    try{
        await connection(process.env.MongoDb_URl)
        console.log("Server is live on Port 4000");
    }
    catch(err){
        console.log("Error Found " +err);
    }
})