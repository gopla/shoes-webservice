const { User } = require("../models");

module.exports = {
  index(req, res) {
    User.findAll().then(data => {
      res.json(data);
    });
  },
  show(req, res) {
    User.findByPk(req.params.id).then(data => {
      res.json(data);
    });
  },
  store(req, res) {
    User.create(req.body).then(data => {
      res.json(data);
    });
  },
  update(req, res) {
    User.findByPk(req.params.id).then(data => {
      data.update(req.body);
      res.json({
        success: true,
        message: "Data Updated"
      });
    });
  },
  delete(req, res) {
    User.findByPk(req.params.id).then(data => {
      data.destroy();
      res.json({
        success: true,
        message: "Data Deleted"
      });
    });
  }
};
