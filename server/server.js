const express = require("express");
const app = express();
const PORT = process.env.HTTP_PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
