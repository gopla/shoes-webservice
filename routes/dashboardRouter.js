const express = require("express");
const router = express.Router();

const con = require("../controller/dashboardController");

router.get("/sepatu", con.countSepatu);
router.get("/user", con.countUser);
router.get("/trans", con.countTrans);
router.get("/retail", con.countRetail);
router.get("/transpermonth", con.getTransPerMonth);

module.exports = router;
