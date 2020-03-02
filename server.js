const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.post('/chargestripe', function (req, res) {
    console.log('STRIPE! ROUTE!')
    const stripe = require('stripe')('sk_test_njoXYGluSBnvktu0T4mehJwe00iPPl2uTu');
    // Token is created using Stripe Checkout or Elements!
    // Get the payment token ID submitted by the form:
    const token = req.body.token; // Using Express
    console.log('TOKEN! ', req.body)

    const charge = stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Example charge',
        source: token,
    });
    console.log('just did  charge!', charge)
})

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/subscription");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT HTTP://localhost:${PORT}!`);
});