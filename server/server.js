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

const corsOptions = {
    //To allow requests from client changes to revert are in:
    origin: [
        "http://localhost:3000",
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
};
app.use(cors(corsOptions));
app.use(express.json());

//middleware for requests::
app.use("/voters/", votersRoute)
app.use("/candidates/", candidatesRoute)
app.use("/moderator/", moderatorRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
