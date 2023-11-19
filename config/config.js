const mongoConnection = require("mongoose")
const connection = async (uri)=>{
    try{
        console.log("Connection is made");
        await mongoConnection.connect(uri)
    }
    catch(err){
        console.log("Error",err);
    }
}

module.exports = connection;