const {check} = require("express-validator");
const {validationError} = require("../middleware/validationHandler")

const companyValidator = [check("name").notEmpty().not().isNumeric(),
                          check("address").isAscii().notEmpty(), 
                          check("city").isAlphanumeric().notEmpty(), 
                          validationError];

module.exports = {companyValidator};