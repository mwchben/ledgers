const express = require("express");
const db = require("./dbconnect")

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });


const app = express();
const PORT = process.env.HTTP_PORT || 8000;

const votersRoute = require("./routes/votersRoute")
const moderatorRoute = require("./routes/moderatorRoute")
const candidatesRoute = require("./routes/candidatesRoute")



app.use(cors());
app.use(express.json());

//middleware for requests::
app.use("/api/voters/", votersRoute)
app.use("/api/candidate/", candidatesRoute)
app.use("/api/moderator/", moderatorRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
