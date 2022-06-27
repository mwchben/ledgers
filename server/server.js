const express = require("express");
const db = require("./dbconnect")

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });


const app = express();
const PORT = process.env.HTTP_PORT || 8000;



app.use(cors()); //cors allows us to connect api with react ::(different ports):: without errors (local dev not in production)
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
