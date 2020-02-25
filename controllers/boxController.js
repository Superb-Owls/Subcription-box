const db = require("../models");

module.exports = {

  ///////////////BoxController//////////////
  findAllBox: function (req, res) {
    db.Box
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },
  findByIdBox: function (req, res) {
    db.Box
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },
  createBox: function (req, res) {
    db.Box
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },
  updateBox: function (req, res) {
    db.Box
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },
  removeBox: function (req, res) {
    db.Box
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },


  ///////////////TestimonialController//////////////
  findAllTestimonial: function (req, res) {
    db.Testimonial
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  findByIdTestimonial: function (req, res) {
    db.Testimonial
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  createTestimonial: function (req, res) {
    db.Testimonial
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },

  updateTestimonial: function (req, res) {
    db.Testimonial
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },

  removeTestimonial: function (req, res) {
    db.Testimonial
      .findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(404).json(err))
  },


  ///////////////CurrentVoteController//////////////
  findAllCurrent: function (req, res) {
    db.CurrentVote
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  findByIdCurrent: function (req, res) {
    db.CurrentVote
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  createCurrent: function (req, res) {
    db.CurrentVote
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },

  updateCurrent: function (req, res) {
    db.CurrentVote
    findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },

  removeCurrent: function (req, res) {
    db.CurrentVote
      .findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(404).json(err))
  },


  ///////////////PastVoteController//////////////
  findAllPast: function (req, res) {
    db.PastVote
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  findByIdPast: function (req, res) {
    db.PastVote
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  createPast: function (req, res) {
    db.PastVote
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },

  updatePast: function (req, res) {
    db.PastVote
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err));
  },
  removePast: function (req, res) {
    db.PastVote
      .findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(404).json(err))
  },

  ///////////////UsersController//////////////
  findAllUsers: function (req, res) {
    db.Users
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },
  findByIdUser: function (req, res) {
    db.Users
      .findById(res.param.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },
  createUser: function (req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },
  updateUser: function (req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(404).json(err))
  },

  removeUser: function (req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => remove(dbModel))
      .catch(err => res.status(404).json(err))
  }







}




