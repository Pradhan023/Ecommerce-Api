const mongoConnection = require("mongoose")
const connection = async ()=>{
    try{
        console.log("Db Connection is made");
        await mongoConnection.connect(process.env.MongoDb_URl)
    }
    catch(err){
        console.log("Error",err);
    }
}

module.exports = connection;