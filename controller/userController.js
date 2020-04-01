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
      _user.foto =
        "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";
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
              (err, token) => {
                res.json({
                  success: true,
                  tokenType: "bearerHeader",
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
