const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();
mongoose.set("strictQuery", false);
const employeeRouter = require("./routes/employee")
const companyRouter = require("./routes/company")
const projectRouter = require("./routes/project")

app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/employee", employeeRouter);
app.use("/api/company", companyRouter);
app.use("/api/project", projectRouter);

async function connect(callback){
try{
   const connection = await mongoose.connect(process.env.MONGO_CNN);
   return callback();
}catch(error){
    throw new Error("No se ha podido conectar a base de datos");
}
}

connect(() => {
    console.log("Conexion realizada con exito");
    app.listen(process.env.PORT_API, console.log("Server API Open on port "+ process.env.PORT_API));
}).catch(error => console.log(error))