const { Keranjang, Sepatu } = require("../models");

module.exports = {
  index(req, res) {
    Keranjang.findAll({
      where: {
        id_user: req.user.id_user
      },
      include: {
        model: Sepatu
      }
    }).then(data => {
      res.json(data);
    });
  },
  store(req, res) {
    Keranjang.findAll({
      where: {
        id_sepatu: req.body.id_sepatu,
        id_user: req.user.id_user
      }
    }).then(data => {
      if (data.length) {
        Keranjang.findByPk(data[0].id_keranjang).then(row => {
          row.update({
            jumlah: data[0].jumlah + parseInt(req.body.jumlah)
          });
          res.json(row);
        });
      } else {
        let _keranjang = req.body;
        _keranjang.id_user = req.user.id_user;
        Keranjang.create(_keranjang).then(row => {
          res.json(row);
        });
      }
    });
  },
  update(req, res) {
    Keranjang.findAll({
      where: {
        id_user: req.user.id_user,
        id_sepatu: req.body.id_sepatu
      }
    }).then(data => {
      Keranjang.findByPk(data[0].id_keranjang)
        .then(data => {
          data.update(req.body);
          res.json({
            success: true,
            message: "Data updated"
          });
        })
        .catch(err => {
          res.json(err);
        });
    });
  },
  delete(req, res) {
    Keranjang.findAll({
      where: {
        id_user: req.user.id_user
      }
    }).then(data => {
      data.map(data => {
        Keranjang.findByPk(data.id_keranjang).then(isi => {
          isi.destroy();
        });
      });
      res.json({
        success: true,
        message: "Data dihapus"
      });
    });
  }
};
