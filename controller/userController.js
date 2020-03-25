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
      res.json({ data });
    });
  },
  store(req, res) {
    _user = req.body;
    if (_user.foto != "null") {
      const encoded = `${req.file.buffer.toString("base64")}`;
      _user.foto = encoded;
    } else {
      _user.foto = "";
    }
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
      const encoded = `${req.file.buffer.toString("base64")}`;

      _user = req.body;
      _user.foto = encoded;
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
  authenticate(req, res) {
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
              {
                id_user: data[0].id_user,
                nama: data[0].name,
                email: data[0].email,
                alamat: data[0].alamat,
                telp: data[0].telp,
                role: data[0].role
              },
              "ayoKerja",
              { expiresIn: "1d" },
              (err, token) => {
                res.json({
                  success: true,
                  tokenType: "bearerHeader",
                  expiresIn: "1 day",
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
  },
  me(req, res) {
    User.findByPk(req.user.id_user)
      .then(data => {
        res.json({ data });
      })
      .catch(err => {
        res.json(err);
      });
  }
};
