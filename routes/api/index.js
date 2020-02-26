const router = require("express").Router();
const boxRoutes = require("./box");
const testimonialRoutes = require("./testimonial");
const currentRoutes = require("./current_vote");
const pastRoutes = require("./past_vote");
const users = require("./users");
const subscription = require("./subscriptions")


// Box routes
router.use("/box", boxRoutes);
router.use("/testimonial", testimonialRoutes);
router.use("/currentvote", currentRoutes);
router.use("/pastvote", pastRoutes);
router.use("/user", users);
router.use("/subscription", subscription)

module.exports = router;
