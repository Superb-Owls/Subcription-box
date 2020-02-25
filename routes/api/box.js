const router = require("express").Router();
const boxController = require("../../controllers/boxController");

// "/api/box/"
router.route("/")
    .get(boxController.findAllBox)
    .post(boxController.createBox);

// "/api/box/:id"
router.route("/:id")
    .get(boxController.findByIdBox)
    .put(boxController.updateBox)
    .delete(boxController.removeBox);

module.exports = router;
