const { Transaksi, TransaksiDetail, Sepatu, Keranjang } = require("../models");
const uuid = require("uuid/v4");

module.exports = {
  index(req, res) {
    Transaksi.findAll({
      where: {
        id_user: req.user.id_user
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
        id_user: req.user.id_user,
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
    // _trans = req.body;
    // _trans.id_transaksi = uuid();
    // _trans.id_user = req.user.id_user;
    // res.json(req.user.id_user);
    Transaksi.create({
      id_transaksi: uuid(),
      id_user: req.user.id_user,
      id_retail: 1
      // ...req.body
    }).then(data => {
      Keranjang.findAll({
        where: {
          id_user: req.user.id_user
        },
        include: {
          model: Sepatu
        }
      }).then(keranjang => {
        // res.json(keranjang);
        let grandTotal = 0;
        keranjang.map(isi => {
          // res.json(isi);
          TransaksiDetail.create({
            id_transaksi: data.id_transaksi,
            id_sepatu: isi.id_sepatu,
            jumlah: isi.jumlah,
            harga: isi.Sepatu.harga,
            subtotal: isi.Sepatu.harga * isi.jumlah
          });
          Sepatu.findByPk(isi.id_sepatu).then(spt => {
            spt.stok -= isi.jumlah;
            spt.save();
          });
          Transaksi.findByPk(data.id_transaksi).then(row => {
            grandTotal += isi.Sepatu.harga * isi.jumlah;
            row.update({
              total: grandTotal
            });
          });
          isi.destroy();
        });
      });
      res.json(data);
    });
  }
};