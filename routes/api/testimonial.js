const router = require("express").Router();
const testimonialController = require("../../controllers/boxController");

router.route("/")
    .get(testimonialController.findAllTestimonial)
    .post(testimonialController.createTestimonial)


router.route("/:id")
    .get(testimonialController.findByIdTestimonial)
    .put(testimonialController.updateTestimonial)
    .delete(testimonialController.removeTestimonial)

module.exports = router