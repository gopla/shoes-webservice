const express = require("express");
const router = express.Router();
const multer = require("multer");

let upload = multer();
const con = require("../controller/sepatuController");

router.get("/", con.index);
router.get("/:id", con.show);
router.post("/", upload.single("gambar"), con.store);
router.put("/:id", upload.single("gambar"), con.update);
router.delete("/:id", con.delete);

router.get("/group/name", con.groupSepatuByName);
router.get("/group/bestSeller", con.groupSepatuBestSeller);

module.exports = router;
