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



        const storeSchema=mongoose.model("allData",userSchema);
        const cartSchema = mongoose.model("AddToCart",addcartSchema);
        module.exports={storeSchema,cartSchema}