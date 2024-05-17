const express = require("express")
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/.env" });
const bodyparser = require("body-parser")
const cors = require('cors');
const databaseConnect = require("./Config/DbConnection");
const studentRouter = require("./Router/studentRouter");

databaseConnect()

const app = express()

app.use(bodyparser.json())
app.use(cors())
app.use("/api", studentRouter)

 
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})