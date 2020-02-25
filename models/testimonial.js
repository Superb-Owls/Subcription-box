const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonial_schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    rating: Number,
    testimonial: String,
    date: { type: Date, default: Date.now }
})

const Testimonial = mongoose.model("Testimonial", testimonial_schema);
module.exports = Testimonial;