const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const current_vote_schema = new Schema({
    month: Number,
    year: Number,
    vote: Number,
    date: { type: Date, default: Date.now }
})

const CurrentSchema = mongoose.model("CurrentVote", current_vote_schema);
module.exports = CurrentSchema;