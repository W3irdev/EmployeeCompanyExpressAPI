const {check} = require("express-validator");
const {validationError} = require("../middleware/validationHandler")

const projectValidator = [check("name").notEmpty().not().isNumeric(),
                          check("budget").isNumeric().notEmpty(), 
                          validationError];

module.exports = {projectValidator};