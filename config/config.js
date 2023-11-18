const mongoConnection = require("mongoose")
mongoConnection.set("strictQuery",true)
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