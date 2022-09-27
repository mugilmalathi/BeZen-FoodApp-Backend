const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    id : {type:String},
    name:{type: String},
    img : {type: String},
    desc : {type : String},
    ingredients : {type : String},
    steps : {type : Array}

},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("food", foodSchema)