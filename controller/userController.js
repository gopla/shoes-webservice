const { User } = require("../models");
const bcrypt = require("../middlewares/bcryptGate");

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
    _user = req.body;
    bcrypt
      .createHash(_user.password)
      .then(hashedPassword => {
        _user.password = hashedPassword;
        User.create(_user).then(data => {
          res.json(data);
        });
      })
      .catch(err => {
        res.json(err);
      });
  },
  update(req, res) {
    User.findByPk(req.params.id).then(data => {
      _user = req.body;
      bcrypt
        .createHash(_user.password)
        .then(hashedPassword => {
          _user.password = hashedPassword;
          data.update(_user);
          res.json({
            success: true,
            message: "Data Updated"
          });
        })
        .catch(err => {
          res.json(err);
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
