const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


let PORT = 5000;
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});