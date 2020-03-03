const router = require("express").Router();

router.route("/")

    .get(async (req, res) => {
        const stripe = require('stripe')('sk_test_njoXYGluSBnvktu0T4mehJwe00iPPl2uTu');
        console.log("HIT THE STRIPE SECRET!!!")
        const intent = await stripe.paymentIntents.create({
            amount: 2000,
            currency: 'usd',
            payment_method_types: ['card'],
        });// ... Fetch or create the PaymentIntent
        console.log('this is intent!!!!!!!!', intent);
        res.json({ client_secret: intent.client_secret });

    })

module.exports = router
