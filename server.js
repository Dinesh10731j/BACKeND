const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const {Signup} = require("./controller/Controller")
dotEnv.config();
const morgan = require("morgan");
const Path = require("path");
const app = express();


app.use(express.json());
const staticPath = Path.join(__dirname,"./dist")
app.use(express.static(staticPath));

app.use(cors());
app.use(morgan("combined"));


app.post("/signup",Signup);

app.listen(process.env.Port,()=>{
    console.log(`Listening to port ${process.env.Port}`)
})