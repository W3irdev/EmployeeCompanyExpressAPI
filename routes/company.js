const express = require("express");
const { getCompanies, addCompany, getCompany, updateCompany, delCompany } = require("../controllers/company");
const {companyValidator} = require("../validators/company")
const router = express.Router();


router.route("/")
.get(getCompanies)
.post(companyValidator,addCompany)

router.route("/:id")
.get(getCompany)
.put(companyValidator,updateCompany)
.delete(delCompany)

module.exports = router;