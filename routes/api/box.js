const router = require("express").Router();
const controller = require("../../controllers/boxController");

// "/api/box/"
router.route("/")
    .get(controller.box.findAll)
    .post(controller.box.create);

// "/api/box/:id"
router.route("/:id")
    .get(controller.box.findById)
    .put(controller.box.update)
    .delete(controller.box.remove);

module.exports = router;
