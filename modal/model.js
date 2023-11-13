const { default: mongoose } = require("mongoose")
        const mongo= require("mongoose")
        const userSchema =mongo.Schema({
            id:"number",
            img:"string",
            heading:"string",
            price:"number",
            category:"string",
            subcategory:"string"
        })

        const addcartSchema =mongo.Schema({
            id:"Number",
            img:"string",
            heading:"string",
            price:"number",
            category:"string",
            subcategory:"string",
            quantity:"number"
        })


        const storeSchema=mongoose.model("allData",userSchema);
        const cartSchema = mongoose.model("AddToCart",addcartSchema);
        module.exports={storeSchema,cartSchema}