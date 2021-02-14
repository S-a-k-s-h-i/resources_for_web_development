const mongoose = require("mongoose");

const topic=new mongoose.model("Topic",new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowecase:true
    },
    url:{
        type:String,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
}))

module.exports = topic;