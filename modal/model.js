        const mongoose = require("mongoose")
        const userSchema =mongoose.Schema({
            id:{
                type:Number,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            img:{
                type:String,
                required:true
            },
            heading:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            category:{
                type:String,
                required:true
            },
            subcategory:{
                type:String,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        })

        const addtocartSchema =mongoose.Schema({
            id:Number,
            img:String,
            heading:String,
            price:Number
        }) 

        const registerSchema =mongoose.Schema({
            username:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            password:{
                type:String,
                required:true
            }
        })

        const productCollection = mongoose.model("ProductData",userSchema)
        const cartCollection = mongoose.model("ADDTOCART",addtocartSchema)
        const AuthenticationCollection = mongoose.model("RegisterData",registerSchema)
        module.exports={productCollection,AuthenticationCollection,cartCollection}