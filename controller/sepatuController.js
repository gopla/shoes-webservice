const { Sepatu } = require("../models");

module.exports = {
  index(req, res) {
    Sepatu.findAll().then(data => {
      res.json(data);
    });
  },
  show(req, res) {
    Sepatu.findByPk(req.params.id).then(data => {
      res.json(data);
    });
  },
  store(req, res) {
    Sepatu.create(req.body).then(data => {
      res.json(data);
    });
  },
  update(req, res) {
    Sepatu.findByPk(req.params.id).then(data => {
      data.update(req.body);
      res.json({
        success: true,
        message: "Data Updated"
      });
    });
  },
  delete(req, res) {
    Sepatu.findByPk(req.params.id).then(data => {
      data.destroy();
      res.json({
        success: true,
        message: "Data Deleted"
      });
    });
  }
};
