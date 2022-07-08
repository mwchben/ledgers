const express = require("express");
const db = require("./dbconnect")

const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.HTTP_PORT || 8000;

const votersRoute = require("./routes/votersRoute")
const moderatorRoute = require("./routes/moderatorRoute")
const candidatesRoute = require("./routes/candidatesRoute")


//middleware from packages
app.use(cookieParser());
app.use(cors());
app.use(express.json());

//middleware for requests::
app.use("/voters/", votersRoute)
app.use("/candidates/", candidatesRoute)
app.use("/moderator/", moderatorRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
