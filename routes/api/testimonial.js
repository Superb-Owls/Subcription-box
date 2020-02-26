const router = require("express").Router();
const controller = require("../../controllers/boxController");

router.route("/")
    .get(controller.testimonial.findAll)
    .post(controller.testimonial.create)


router.route("/:id")
    .get(controller.testimonial.findById)
    .put(controller.testimonial.update)
    .delete(controller.testimonial.remove)

module.exports = router