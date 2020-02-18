const express = require("express");
const router = express.Router();
// const verify = require("../middlewares/authUser");

const con = require("../controller/transaksiController");

// router.use(verify);
router.get("/:id_user", con.index);
// router.get("/:id", con.show);
router.post("/:id_user", con.store);
// router.put("/:id", con.update);
// router.delete("/:id", con.delete);

module.exports = router;
