const {storeAuthentication} = require("../modal/model")

const arr = []

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = "Anish123"

const register = async (req,res)=>{
    const details = req.body 
    const salt = 10
    const regData = await storeAuthentication.findOne({email:details.email})

    if(regData){
        return res.send({msg:"User is already registered"})
    }
    const hashPassword = bcrypt.hashSync(details.password,salt) 
    const Obj={
        username:details.username,
        email:details.email,
        password:hashPassword
    }
    await storeAuthentication.create(Obj) //creating db for registered user

    const getRegsDb = await storeAuthentication.find({})
    console.log(getRegsDb);
    arr.push(getRegsDb)

    // const token = jwt.sign({userEmail:details.email},secretKey)

    return res.send({msg:"User is successfully Registered"})
}

const login =async (req,res)=>{
    const logData = req.body
    const logDb = await storeAuthentication.find({})
    
    const LogDetails = logDb.find(item=>{
        if(logData.email === item.email)
        {
            return item
        }
    })

    if(LogDetails){
        const encrypt = bcrypt.compareSync(logData.password,LogDetails.password)
        if(encrypt){
            const token = jwt.sign({userEmail:logData.email},secretKey,{expiresIn:"7d"})
            console.log({msg:"User is successfully Login",username:LogDetails.username,token:token});
            return res.send({msg:"User is successfully Login",username:LogDetails.username,token:token})
        }
        else{
            return res.send({msg:"Check the Password"})
        }
    }
    else{
        return res.send({msg:"Check the Email or Try to Register again"})
    }
}

const auth = (req,res,next)=>{
    const BearerToken = req.headers["authorization"];
    if(BearerToken){
        const token = BearerToken.split(" ")[1];
        const validate = jwt.verify(token,secretKey);
        
        if(validate){
            next();
        }
        return res.send({msg:"User is not Authorized"})
    }
    return res.send({msg:"User are not Allowed"});
}

module.exports = {register,login,auth}