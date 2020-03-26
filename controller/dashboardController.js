const { Sepatu, User, Transaksi, Retail } = require("../models");
const sequelize = require("sequelize");

async function jmlSepatu() {
  let jmlSepatu = await Sepatu.findAll({
    attributes: [
      "id_sepatu",
      [sequelize.fn("count", sequelize.col("id_sepatu")), "count"]
    ]
  });
  return jmlSepatu;
}

async function jmlUser() {
  let jmlUser = await User.findAll({
    attributes: [
      "id_user",
      [sequelize.fn("count", sequelize.col("id_user")), "count"]
    ]
  });
  return jmlUser;
}

async function jmlTransaksi() {
  let jmlTrans = await Transaksi.findAll({
    attributes: [
      "id_transaksi",
      [sequelize.fn("count", sequelize.col("id_transaksi")), "count"]
    ]
  });
  return jmlTrans;
}

async function jmlRetail() {
  let jmlRetail = await Retail.findAll({
    attributes: [
      "id_retail",
      [sequelize.fn("count", sequelize.col("id_retail")), "count"]
    ]
  });
  return jmlRetail;
}

module.exports = {
  countSepatu(req, res) {
    jmlSepatu().then(sepatu => {
      res.json(sepatu);
    });
  },
  countRetail(req, res) {
    jmlRetail().then(retail => {
      res.json(retail);
    });
  },
  countTrans(req, res) {
    jmlTransaksi().then(trans => {
      res.json(trans);
    });
  },
  countUser(req, res) {
    jmlUser().then(user => {
      res.json(user);
    });
  }
};
