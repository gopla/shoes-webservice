const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { createHash } = require("../middlewares/createHash");
const jwt = require("jsonwebtoken");

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
    createHash(_user.password)
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
      createHash(_user.password)
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
  },
  autehnticate(req, res) {
    const _user = req.body;
    User.findAll({
      where: {
        email: _user.email
      }
    })
      .then(data => {
        if (data[0] == null) {
          res.json({
            success: false,
            error: "Email salah"
          });
        } else {
          if (bcrypt.compareSync(_user.password, data[0].password)) {
            jwt.sign(
              { payload: data[0] },
              "ayoKerja",
              { expiresIn: "1d" },
              (err, token) => {
                res.json({
                  success: true,
                  token: token
                });
              }
            );
          } else {
            res.json({
              success: false,
              error: "Password salah"
            });
          }
        }
      })
      .catch(err => {
        res.json(err);
      });
  }
};
