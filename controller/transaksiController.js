const {
  Transaksi,
  TransaksiDetail,
  Sepatu,
  Keranjang,
  Retail
} = require("../models");
const uuid = require("uuid/v4");

module.exports = {
  index(req, res) {
    if (req.user.role == "Admin") {
      Transaksi.findAll()
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    } else {
      Transaksi.findAll({
        where: {
          id_user: req.user.id_user
        },
        include: {
          model: Retail
        }
      })
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    }
  },
  show(req, res) {
    TransaksiDetail.findAll({
      where: {
        id_transaksi: req.params.id_transaksi
      },
      include: {
        model: {
          Sepatu
        }
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
    Transaksi.create({
      id_transaksi: uuid(),
      id_user: req.user.id_user
    }).then(data => {
      Keranjang.findAll({
        where: {
          id_user: req.user.id_user
        },
        include: {
          model: Sepatu
        }
      }).then(keranjang => {
        let grandTotal = 0;
        keranjang.map(isi => {
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
