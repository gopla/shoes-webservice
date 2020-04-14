const { Sepatu, User, Transaksi, Retail } = require('../models')
const sequelize = require('sequelize')

async function jmlSepatu() {
  let jmlSepatu = await Sepatu.findAll({
    attributes: [
      'id_sepatu',
      [sequelize.fn('count', sequelize.col('id_sepatu')), 'count'],
    ],
  })
  return jmlSepatu
}

async function jmlUser() {
  let jmlUser = await User.findAll({
    attributes: [
      'id_user',
      [sequelize.fn('count', sequelize.col('id_user')), 'count'],
    ],
  })
  return jmlUser
}

async function jmlTransaksi() {
  let jmlTrans = await Transaksi.findAll({
    attributes: [
      'id_transaksi',
      [sequelize.fn('count', sequelize.col('id_transaksi')), 'count'],
    ],
  })
  return jmlTrans
}

async function jmlRetail() {
  let jmlRetail = await Retail.findAll({
    attributes: [
      'id_retail',
      [sequelize.fn('count', sequelize.col('id_retail')), 'count'],
    ],
  })
  return jmlRetail
}

async function getTransPerMonth() {
  let now = new Date()
  let thisMonth = now.getMonth() + 1

  let transPerMonth = await Transaksi.findAll({
    attributes: [
      'tanggal',
      [sequelize.fn('sum', sequelize.col('total')), 'total_harian'],
    ],
    where: [
      sequelize.where(
        sequelize.fn('month', sequelize.col('tanggal')),
        thisMonth
      ),
    ],
    group: [sequelize.fn('date', sequelize.col('tanggal'))],
  })
  return transPerMonth
}

module.exports = {
  countSepatu(req, res) {
    if (req.user.role == 'Admin') {
      jmlSepatu().then((sepatu) => {
        res.json(sepatu)
      })
    }
  },
  countRetail(req, res) {
    if (req.user.role == 'Admin') {
      jmlRetail().then((retail) => {
        res.json(retail)
      })
    }
  },
  countTrans(req, res) {
    if (req.user.role == 'Admin') {
      jmlTransaksi().then((trans) => {
        res.json(trans)
      })
    }
  },
  countUser(req, res) {
    if (req.user.role == 'Admin') {
      jmlUser().then((user) => {
        res.json(user)
      })
    }
  },
  getTransPerMonth(req, res) {
    getTransPerMonth().then((data) => {
      res.json(data)
    })
  },
}
