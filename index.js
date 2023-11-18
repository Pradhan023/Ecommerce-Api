require("dotenv").config();

const express = require("express")
const app = express()

const Port  = 4000

const connection = require("./config/config")

const Cors = require("cors")

app.use(Cors({
    origin:"*"
}))

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