const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProjectSchema= new Schema({

    id:{
        type:Number,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required:true
    },
    budget:{
        type:Number,
        required:true
    }
    

})

module.exports = mongoose.model("Project", ProjectSchema);