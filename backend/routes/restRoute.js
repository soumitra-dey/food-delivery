const express = require("express");
const restModel = require("../models/productModel");
const fs = require("fs");

const app = express.Router();

app.get("/", async (req,res) => {
    let a = await restModel.find();
    res.send(a);
})

module.exports = app;