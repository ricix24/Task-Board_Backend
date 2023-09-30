// const { Int32 } = require('mongodb/mongodb');
const mongoose= require('mongoose');

const PostSchema = new mongoose.Schema({

    id:{type:String , required: true},
    title:{type:String , required: true},
    tag:{type:String , required: true},
    // userID: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    status:{type:String , required: true},
    priority:{type:Number , required: true},
    user:{type:String , required: true},


},{timestamps: true})

const Post=mongoose.model("post", PostSchema);
module.exports= Post