const express = require("express");
const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });


const app = express();
const db = mongoose.connection
const PORT = process.env.HTTP_PORT || 8000;

db.on('error', error => console.error(error))
db.once('open', () => console.log("Connected to Mongoose"))

app.use(cors()); //cors allows us to connect api with react ::(different ports):: without errors (local dev not in production)
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
