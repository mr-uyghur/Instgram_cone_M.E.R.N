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
        default:"No Photo"
    },
    postedBy:{
        // build relationship between user
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Post", postSchema)