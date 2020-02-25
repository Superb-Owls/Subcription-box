const db = require("../models");


class Controller {
  constructor(database) {
    this.findAll = (req, res) => {
      db[database]
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }

    this.findById = (req, res) => {
      db[database]
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err))
    }

    this.create = (req, res) => {
      db[database]
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err))
    }
    this.update = (req, res) => {
      db[database]
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }

    this.remove = (req, res) => {
      db[database]
        .findById(req.params.id)
        .then(bdModel => dbModel.remove())
        .catch(err => res.status(404).json(err));
    }
  }
}

module.exports = {
  box: new Controller('Box'),
  current: new Controller('CurrentVote'),
  past: new Controller('PastVote'),
  user: new Controller('Users'),
  subscription: new Controller('Subscriptions'),
  testimonial: new Controller('Testimonial'),

}
