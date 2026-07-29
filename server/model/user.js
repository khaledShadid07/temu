const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

userName:{type:String,default:'user',trim:true},
email:{type:String,required:[true, 'Email is required'],unique: true,lowercase: true,trim: true},
password:{type:String,required:[true,'password is required']},
role:{type:String,enum:['user','admin'],default:'user'}




},{ timestamps: true });



module.exports= mongoose.model('user',userSchema)