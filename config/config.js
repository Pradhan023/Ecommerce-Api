// require("dotenv").config();
const uri = "mongodb+srv://anishpradha5523:anish5523@clusterecommerce.stflsbk.mongodb.net/Ecommerce?retryWrites=true&w=majority"
const mongoConnection = require("mongoose")
const connection = async ()=>{
    try{
        console.log("Connection is made");
        await mongoConnection.connect(uri)
    }
    catch(err){
        console.log("Error",err);
    }
}

module.exports = connection;