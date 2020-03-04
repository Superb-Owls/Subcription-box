if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;
const bcrypt = require('bcryptjs')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const initializePassport = require('./passport-config');
initializePassport(passport, email=>
    users.find(user => user.email === email),
    id => users.find(user => user.id===id)
);
const checkAuthenticated = (req,res,next)=>{
    if (req.isAuthenticated()){
        return next()
    }
    res.send("not authenticated")
}

const checkNotAuthenticated = (req,res,next)=>{
    if (req.isAuthenticated()){
        res.send("authenticated")
    }
    next();
}

const users = []

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false 
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.post('/api/login', checkNotAuthenticated, passport.authenticate('local', {
    failureFlash: 'login failed',
    successFlash: 'Success'
}))


app.post('/api/register',checkNotAuthenticated, async (req,res)=>{
    console.log(req.body)
    try{
        const hashdPwrd = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashdPwrd,
            isAuthenticated: req.body.isAuth
        })
        res.send(200, users)
        }
        catch{
            res.send("error registering")
        }
        console.log(users)
})

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