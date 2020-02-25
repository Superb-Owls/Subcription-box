const router = require("express").Router();
const controller = require("../../controllers/boxController")

router.route("/")
    .get(controller.user.findAll)
    .post(controller.user.create)


router.route("/:id")
    .get(controller.user.findById)
    .put(controller.user.update)
    .delete(controller.user.remove)

module.exports = router