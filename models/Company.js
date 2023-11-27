const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CompanySchema= new Schema({

    id:{
        type:Number,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("Company", CompanySchema);