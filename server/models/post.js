const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type:String, 
        required:true
    },
    body:{
        type:String, 
        required:true
    },
    photos:{
        type:String,
        required:true
    },
    // likes model will be an array
    // each item will be an Id that refers to user model
    likes:[{type:ObjectId,ref:"User"}],
    postedBy:{
        // build relationship between user
        type:ObjectId,
        ref:"User"
    }
})

// 

mongoose.model("Post", postSchema)