const express = require("express");
const router = express.Router();

const con = require("../controller/keranjangController");

router.get("/:id_user", con.index);
// router.get("/:id", con.show);
router.post("/", con.store);
// router.put("/:id", con.update);
// router.delete("/:id", con.delete);

module.exports = router;
