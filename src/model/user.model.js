const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id : {type:String},
    name:{type: String},
    email : {type: String},
    password : {type: String}

},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("userdetailss", userSchema)