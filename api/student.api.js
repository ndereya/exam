const express= require('express');
const { StudentModel } = require('../Model/StudentModel');



const studentApi = express.Router();
//view students
studentApi.get("/students", async (req, res) => {
    try {
        let data = await StudentModel.find();
        res.send({
            message: data
        });
    } catch (err) {
        res.send({
            message: err.message
        });
    }
});

//view student
studentApi.get("/student/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let data = await StudentModel.findById(id);
        res.send({
            message: data
        });
    } catch (err) {
        res.send({
            message: err.message
        });
    }
});

//register student data to the db
studentApi.post("/register",async (req,res)=>{
    try {

        let data =  new StudentModel(req.body);
    await data.save();
    res.send(
        {
            message: "Student registerd"
        }
    )
    } catch (err) {
        res.send(
            {
                message: err.message
            })
    }
})

//update 
studentApi.patch("/:id/edit", async(req,res)=>{
    try {
        const {id} = req.params;
        await StudentModel.findByIdAndUpdate({_id:id},req.body);
        res.send({
            message: "Student Updated"
        })
        
    } catch (error) {
        res.send(
            {
                message:err.message
            }
        )
        
    }
   
})


module.exports={studentApi}
