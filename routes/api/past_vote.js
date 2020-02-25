const router = require("express").Router();
const controller = require("../../controllers/boxController");

router.route("/")
    .get(controller.past.findAll)
    .post(controller.past.create)


router.route("/:id")
    .get(controller.past.findById)
    .put(controller.past.update)
    .delete(controller.past.remove)

module.exports = router