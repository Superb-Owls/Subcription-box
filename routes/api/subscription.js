const router = require("express").Router();
const subscriptionController = require("../../controllers/boxController");

router.route("/")
    .get(subscriptionController.findAllSubscription)
    .post(subscriptionController.createSubscription)


router.route("/:id")
    .get(subscriptionController.findByIdSubscription)
    .put(subscriptionController.updateSubscription)
    .delete(subscriptionController.removeSubscription)

module.exports = router