const { Retail } = require("../models");

module.exports = {
  index(req, res) {
    Retail.findAll()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
      });
  },
  show(req, res) {
    Retail.findByPk(req.params.id).then(data => {
      res.json(data);
    });
  },
  store(req, res) {
    Retail.create(req.body).then(data => {
      res.json(data);
    });
  },
  update(req, res) {
    Retail.findByPk(req.params.id).then(data => {
      data.update(req.body);
      res.json({
        success: true,
        message: "Data Updated"
      });
    });
  },
  delete(req, res) {
    Retail.findByPk(req.params.id).then(data => {
      data.destroy();
      res.json({
        success: true,
        message: "Data Deleted"
      });
    });
  }
};
