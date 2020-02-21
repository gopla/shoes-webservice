const express = require("express");
const router = express.Router();
const verify = require("../middlewares/verifyToken");

const con = require("../controller/keranjangController");

router.use(verify);

router.get("/:id_user", con.index);
router.post("/", con.store);
router.put("/", con.update);
router.delete("/:id_user", con.delete);

module.exports = router;
