const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({

  shippingAddress: {
    type: String
  },
  Tier: {
      type: Number
  },
  BillingName: {
      type: String
  },
  StartDate: {
      type: Date
  },
  IsActive:{
      type: Boolean
  }
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;