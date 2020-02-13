const express = require("express");
const router = express.Router();
module.exports = router;

router.use("/sepatu", require("../routes/sepatuRouter"));
router.use("/retail", require("../routes/retailRouter"));
router.use("/user", require("../routes/userRouter"));
router.use("/keranjang", require("../routes/keranjangRouter"));
