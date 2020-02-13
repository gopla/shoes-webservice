const { Keranjang, Sepatu } = require("../models");

module.exports = {
  index(req, res) {
    Keranjang.findAll({
      where: {
        id_user: req.params.id_user
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
        id_user: req.body.id_user
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
        _keranjang.id_user = req.body.id_user;
        console.log(_keranjang);
        Keranjang.create(_keranjang).then(function(row) {
          res.json(row);
        });
      }
    });
  },
  update(req, res) {
    Kerangjang.findAll({
      id_user
    });
  }
};
