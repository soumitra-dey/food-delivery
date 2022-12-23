const { default: mongoose } = require("mongoose");

const restModel = mongoose.model("rest", new mongoose.Schema({
    name: String,
    image: String,
    rating: String,
    catogory: String,
    etc: String,
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}))


module.exports = restModel;