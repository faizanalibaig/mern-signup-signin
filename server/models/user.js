const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const Joi=require('joi')
const passwordComplexity=require('joi-password-complexity')

const userScheme= new mongoose.Schema({
    firstName: {type:String , required:true},
    lastName: {type:String , required:true},
    email: {type:String , required:true},
    password: {type:String , required:true},

})

userScheme.methods.generateAuthToken= function(){
    const token= jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY,{expiresIn: "7d"})
}

const User= mongoose.model("user", userScheme)

const validate=()=>{
    const schema={
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        email: Joi.string().email.required().label('Email'),
        firstName:passwordComplexity.required().label('Password')
    }
    return schema.validate(data)
}

module.exports={User, validate}