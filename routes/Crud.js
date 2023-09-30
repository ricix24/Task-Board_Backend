const express = require('express');
const router = express.Router();
const Post = require("../Post");
const User = require("../User");


//local host500-/api

// to ccreate new post
router.post("/", async(req, res)=>{
try{
    let {id,title,tag,userId,status,priority,user}=req.body;

    let t=await Post.countDocuments();
    console.log(t);
    let tid=`CAM-${t+10}`
    console.log(tid);
    id=tid;
    let post = new Post({id,title,tag,status,priority,user});
console.log(title);
console.log(tag);
console.log(user);
console.log(status);
console.log(typeof(priority));
await post.save();
console.log(2000);
// let user = new User({uid  , name, available});
console.log(user);
// await user.save();

res.status(200).json({msg : "post created succesfully"});


}
catch(error){
    console.log(error)
    res.status(200).json({msg : "Somethinng went wrong"});
}


})

router.get("/" ,async(req , res)=>{

    try{
        let posts= await Post.find();
        let user=await User.find();
        // console.log(error)
        // res.status(200).json({msg : "ALL post "});
        const response={
            posts,user
        }
        res.status(200).json([response]);
        


    }catch{

    res.status(200).json({msg : "Something went wrong"});

    }
})
router.delete("/:RevI", async(req, res)=>{
    try{
        let RevId =  req.params.RevI;
        // console.log(RevId);
        // console.log(10);
    
        let Rev = await Post.findById(RevId);
        // console.log(Rev);
        if(!Rev){
            return res.status(201).json({
                msg: "Your Review is not found",
              });
        }
        Rev =await Post.findByIdAndRemove(RevId);
        
        res.status(200).json({
            msg: "Your Review is Deleted",
          });
    
    }
    catch(error){
        console.error(error);
        res.status(500).json({ errors: [{ msg: error.message }] });
    }
    })


module.exports= router