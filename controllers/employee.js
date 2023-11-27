const Employee = require("../models/Employee");
const router = require("express").Router();

const addEmployee = async (req,res)=>{
    const newEmployee = new Employee(req.body)
    try{
        const save = await newEmployee.save();
        res.status(201).send(save);
    }catch(error){
        console.log(error.message);
        res.status(400).json({msg:error.message})
    }
}

const getEmployees = async (req, res)=>{

    try {
        const employees = await Employee.find().sort({"created_at":1});
        res.status(200).send(employees);
    } catch (error) {
        res.status(400).json({msg:error.message})

    }

}

const getEmployee = async (req, res)=>{
    const id = req.params.id;
    try {
        if(id){

            const employee = await Employee.findById(id);
            res.status(200).send(employee);
        }
    } catch (error) {
        res.status(404).json({msg:error.message})

    }

}

const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const updEmployee = req.body
    try {
        if(id && updEmployee){
            const update = await Employee.findByIdAndUpdate(id,updEmployee);
            res.status(200).send(update);
        }
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}


const delEmployee = async (req, res) => {
    const id = req.params.id;
    try {
        if(id){
            const delEmployee = await Employee.findByIdAndDelete(id);
            if(delEmployee!=null){

                res.status(200).send(delEmployee);
            }else{
                res.status(404).send({msg:"Id doesn't exist"});
            }
        }
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}

module.exports = {addEmployee, getEmployees, updateEmployee, getEmployee, delEmployee}