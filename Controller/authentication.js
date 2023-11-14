const arr = []

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = "Anish123"

const register = (req,res)=>{
    const details = req.body 
    const salt = 10
    const regData = arr.find((item)=>{
        if(details.email === item.email){
            return item
        }
    })
    if(regData){
        return res.send({msg:"User is already registered"})
    }
    const hashPassword = bcrypt.hashSync(details.password,salt) 
    const Obj={
        username:details.username,
        email:details.email,
        password:hashPassword
    }
    arr.push(Obj)
    const token = jwt.sign({userEmail:details.email},secretKey)
    console.log(Obj);
    console.log(details.email , " " , hashPassword);
    return res.send({msg:"User is successfully Registered",arr,token:token})
}

const login = (req,res)=>{
    const logData = req.body

    const LogDetails = arr.find(item=>{
        if(logData.email === item.email)
        {
            return item
        }
    })

    if(LogDetails){
        const encrypt = bcrypt.compareSync(logData.password,LogDetails.password)
        if(encrypt){
            const token = jwt.sign({userEmail:logData.email},secretKey,{expiresIn:"7d"})
            return res.send({msg:"User is successfully Login",token:token})
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