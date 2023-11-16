const { default: mongoose } = require("mongoose")
        const mongo= require("mongoose")
        const userSchema =mongo.Schema({
            id:Number,
            img:String,
            heading:String,
            price:Number,
            category:String,
            subcategory:String,
            quantity:Number
        })

        const registerSchema =mongo.Schema({
            username:String,
            email:String,
            password:String
        })

        const storeSchema=mongoose.model("allData",userSchema);
        const storeAuthentication = mongoose.model("regsData",registerSchema)
        module.exports={storeSchema,storeAuthentication}