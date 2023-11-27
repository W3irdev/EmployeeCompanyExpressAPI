const Company = require("../models/Company");
const router = require("express").Router();

const addCompany = async (req,res)=>{
    const newCompany = new Company(req.body)
    try{
        const save = await newCompany.save();
        res.status(201).send(save);
    }catch(error){
        console.log(error.message);
        res.status(400).json({msg:error.message})
    }
}

const getCompanies = async (req, res)=>{

    try {
        const companies = await Company.find();
        res.status(200).send(companies);
    } catch (error) {
        res.status(400).json({msg:error.message})

    }

}

const getCompany = async (req, res)=>{
    const id = req.params.id;
    try {
        if(id){

            const company = await Company.findById(id);
            res.status(200).send(company);
        }
    } catch (error) {
        res.status(404).json({msg:error.message})

    }

}

const updateCompany = async (req, res) => {
    const id = req.params.id;
    const updCompany = req.body
    try {
        if(id){
            const update = await Company.findByIdAndUpdate(id,updCompany);
            res.status(200).send(update);
        }
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

const delCompany = async (req, res) => {
    const id = req.params.id;
    try {
        if(id){
            const delCompany = await Company.findByIdAndDelete(id);
            if(delCompany!=null){

                res.status(200).send(delCompany);
            }else{
                res.status(404).send({msg:"Id doesn't exist"});
            }
        }
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}

module.exports = {addCompany, getCompanies, updateCompany, delCompany, getCompany}