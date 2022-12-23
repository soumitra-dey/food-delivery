const express = require("express");
const cors = require("cors");
const dbConnect = require("./connect");
const restRoute = require("./routes/restRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/rest",restRoute);

app.listen(8080, async (req, res) => {
    await dbConnect();
    console.log("http://localhost:8080/");
})