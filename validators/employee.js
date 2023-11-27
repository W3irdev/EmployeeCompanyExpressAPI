const {check} = require("express-validator");
const {validationError} = require("../middleware/validationHandler");
const { existsEmail } = require("../helpers/db-validator");

const employeeValidator = [check("firstName").isAscii().notEmpty().not().isNumeric(),
                          check("lastName").isAscii().notEmpty(), 
                          check("email").isEmail().notEmpty(),
                          check("email").custom(existsEmail),
                          check("gender").isAlpha().custom((gender, {req}) =>{
                            if(gender==="H" || gender === "M") return true;
                         }),
                          check("dateOfBirth").isDate().custom((date, {req}) =>{
                            if(Date.parse(date)<Date.now()){
                              return true;
                            }
                          }),
                          check("idCompany").isNumeric().notEmpty(),
                          validationError];

module.exports = {employeeValidator};