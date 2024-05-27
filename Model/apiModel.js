const mongoose = require("mongoose");

const Schema = mongoose.Schema

const apiSchema = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

module.exports = mongoose.model("API" , apiSchema);