const express = require("express");
const { getProjects, addProject, getProject, updateProject, delProject } = require("../controllers/Project");
const {projectValidator} = require("../validators/project")
const router = express.Router();


router.route("/")
.get(getProjects)
.post(projectValidator,addProject)

router.route("/:id")
.get(getProject)
.put(projectValidator,updateProject)
.delete(delProject)

module.exports = router;