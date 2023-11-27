const express = require("express");
const router = express.Router();
const {employeeValidator} = require("../validators/employee")
const { addEmployee, getEmployees, updateEmployee, delEmployee, getEmployee, delEmployeeEmail } = require("../controllers/employee");


router.route("/:id")
.get(getEmployee)
.put(employeeValidator,updateEmployee)
.delete(delEmployee)

router.route("/")
.get(getEmployees)
.post(employeeValidator,addEmployee)


module.exports = router;