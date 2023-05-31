const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:String,required:true},
    address:{type:String,required:true},
    teesize:{type:String,required:true},
    comment:{type:String,required:false},
    status:{type:Boolean,required:true}

},{
    verisionKey: false
})


const StudentModel = mongoose.model('allstudent',studentSchema)
module.exports = {StudentModel}