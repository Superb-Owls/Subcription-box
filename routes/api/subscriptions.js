const router = require("express").Router();
const controller = require("../../controllers/boxController")

router.route("/")
    .get(controller.subscription.findAll)
    .post(controller.subscription.create)


router.route("/:id")
    .get(controller.subscription.findById)
    .put(controller.subscription.update)
    .delete(controller.subscription.remove)

module.exports = router