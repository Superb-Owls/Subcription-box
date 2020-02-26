const router = require("express").Router();
const controller = require("../../controllers/boxController");

router.route("/")
    .get(controller.current.findAll)
    .post(controller.current.create)


router.route("/:id")
    .get(controller.current.findById)
    .put(controller.current.update)
    .delete(controller.current.remove)

module.exports = router