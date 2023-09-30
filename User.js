// const { Int32 } = require('mongodb/mongodb');
const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({

    uid:{type:String , required: true},
    name:{type:String , required: true},
    available:{type:String , required: true}


},{timestamps: true})

const User=mongoose.model("user", UserSchema);
module.exports= User