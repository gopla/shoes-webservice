const { Sepatu, TransaksiDetail } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  index(req, res) {
    if (req.user.role == "Admin") {
      Sepatu.findAll()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      Sepatu.findAll({
        where: {
          stok: {
            [Op.gt]: 0,
          },
        },
      })
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.json(err);
        });
    }
  },
  show(req, res) {
    Sepatu.findByPk(req.params.id).then((data) => {
      res.json({ data });
    });
  },
  store(req, res) {
    const encoded = `${req.file.buffer.toString("base64")}`;
    let _spt = req.body;
    _spt.gambar = encoded;
    Sepatu.create(_spt).then((data) => {
      res.json(data);
    });
  },
  update(req, res) {
    const encoded = `${req.file.buffer.toString("base64")}`;
    let _spt = req.body;
    _spt.gambar = encoded;
    Sepatu.findByPk(req.params.id).then((data) => {
      data.update(_spt);
      res.json({
        success: true,
        message: "Data Updated",
      });
    });
  },
  delete(req, res) {
    Sepatu.findByPk(req.params.id).then((data) => {
      data.destroy();
      res.json({
        success: true,
        message: "Data Deleted",
      });
    });
  },
  groupSepatuByName(req, res) {
    Sepatu.findAll({
      group: ["nama"],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  groupSepatuBestSeller(req, res) {
    Sepatu.findAll({
      include: {
        model: TransaksiDetail,
        where: {
          jumlah: {
            [Op.gt]: 0,
          },
        },
      },
      group: ["nama"],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  groupSepatuByType(req, res) {
    Sepatu.findAll({
      group: ["tipe"],
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  sepatuByType(req, res) {
    Sepatu.findAll({
      where: {
        tipe: req.params.type,
        stok: {
          [Op.gt]: 0,
        },
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  sepatuByName(req, res) {
    Sepatu.findAll({
      where: {
        nama: req.params.name,
        stok: {
          [Op.gt]: 0,
        },
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
