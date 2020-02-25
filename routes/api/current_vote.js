const router = require("express").Router();
const currentController = require("../../controllers/boxController");

router.route("/")
    .get(currentController.findAllCurrent)
    .post(currentController.createCurrent)


router.route("/:id")
    .get(currentController.findByIdCurrent)
    .put(currentController.updateCurrent)
    .delete(currentController.removeCurrent)

module.exports = router