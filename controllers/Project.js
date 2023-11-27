const Project = require("../models/Project");
const router = require("express").Router();

const addProject = async (req,res)=>{
    const newProject = new Project(req.body)
    try{
        const save = await newProject.save();
        res.status(201).send(save);
    }catch(error){
        console.log(error.message);
        res.status(400).json({msg:error.message})
    }
}

const getProjects = async (req, res)=>{

    try {
        const projects = await Project.find();
        res.status(200).send(projects);
    } catch (error) {
        res.status(400).json({msg:error.message})

    }

}

const getProject = async (req, res)=>{
    const id = req.params.id;
    try {
        if(id){

            const getProject = await Project.findById(id);
            res.status(200).send(getProject);
        }
    } catch (error) {
        res.status(400).json({msg:error.message})

    }

}

const updateProject = async (req, res) => {
    const id = req.params.id;
    const updProject = req.body
    try {
        if(id){
            const update = await Project.findByIdAndUpdate(id,updProject);
            res.status(200).send(update);
        }
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}

const delProject = async (req, res) => {
    const id = req.params.id;
    try {
        if(id){
            const delProject = await Project.findByIdAndDelete(id);
            if(delProject!=null){

                res.status(200).send(delProject);
            }else{
                res.status(404).send({msg:"Id doesn't exist"});
            }
        }
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
}

module.exports = {addProject, getProjects, updateProject, delProject, getProject}