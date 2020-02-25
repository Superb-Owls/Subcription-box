const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boxSchema = new Schema({
    month: { type: Number },
    year: { type: Number },
    content: { type: [String] },
    imageUrl: { type: String }
})
const Box = mongoose.model("Box", boxSchema);
module.exports = Box;