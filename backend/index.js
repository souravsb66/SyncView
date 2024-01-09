const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    try {
        res.json({message: "Hello, Welcome"});
    }
    catch(err) {
        res.json({error: err.message});
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Listen on PORT ${process.env.PORT}`);
})