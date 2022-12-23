const { default: mongoose } = require("mongoose");
const dbConnect = () => mongoose.connect("mongodb+srv://gir:1@cluster0.tgipopf.mongodb.net/hh?retryWrites=true");
module.exports = dbConnect;