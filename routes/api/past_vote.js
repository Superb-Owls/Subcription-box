const router = require("express").Router();
const pastController = require("../../controllers/boxController");

router.route("/")
    .get(pastController.findAllPast)
    .post(pastController.createPast)


router.route("/:id")
    .get(pastController.findByIdPast)
    .put(pastController.updatePast)
    .delete(pastController.removePast)

module.exports = router