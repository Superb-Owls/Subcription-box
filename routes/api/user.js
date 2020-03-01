const router = require("express").Router();
const userController = require("../../controllers/boxController");

router.route("/")
    .get(userController.findAllTestimonial)
    .post(userController.createTestimonial)


router.route("/:id")
    .get(userController.findByIdTestimonial)
    .put(userController.updateTestimonial)
    .delete(userController.removeTestimonial)

module.exports = router