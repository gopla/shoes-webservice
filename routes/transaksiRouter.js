const express = require("express");
const router = express.Router();
const verify = require("../middlewares/verifyToken");

const con = require("../controller/transaksiController");

router.use(verify);
router.get("/", con.index);
router.get("/:id_transaksi", con.show);
router.post("/", con.store);

router.put("/:id_transaksi", con.updateRetail);

module.exports = router;
