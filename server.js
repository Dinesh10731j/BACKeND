const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const { Signup } = require("./controller/Controller");
const morgan = require("morgan");
const Path = require("path");

dotEnv.config();
const app = express();

app.use(express.json());
const staticPath = Path.join(__dirname, "./dist");
app.use(express.static(staticPath));

app.use(cors());
app.use(morgan("combined"));

const PORT = process.env.PORT || 8080;

app.post("/signup", Signup);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});