const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    idCompany:{
        type:Number,
        required:true
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Employee", employeeSchema);