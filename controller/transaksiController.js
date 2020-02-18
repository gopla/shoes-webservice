const { Transaksi, TransaksiDetail, Sepatu, Keranjang } = require("../models");
const uuid = require("uuid/v4");

module.exports = {
  index(req, res) {
    Transaksi.findAll({
      where: {
        id_user: req.params.id_user
      }
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  show(req, res) {
    Transaksi.findAll({
      where: {
        id_user: req.params.id_user,
        id_transaksi: req.params.id_transaksi
      }
    })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  store(req, res) {
    _trans = req.body;
    _trans.id_transaksi = uuid();
    _trans.id_user = req.params.id_user;
    Transaksi.create(_trans).then(data => {
      res.json(data);
    });
  }
};
