const express = require("express");
const router = express.Router();
const multer = require("multer");
const verify = require("../middlewares/verifyToken");

let upload = multer();
const con = require("../controller/sepatuController");

router.get("/:id", con.show);
router.post("/", upload.single("gambar"), con.store);
router.put("/:id", upload.single("gambar"), con.update);
router.delete("/:id", con.delete);

router.get("/group/name", con.groupSepatuByName);
router.get("/group/bestSeller", con.groupSepatuBestSeller);
router.get("/group/type", con.groupSepatuByType);
router.get("/group/type/:type", con.sepatuByType);
router.get("/group/name/:name", con.sepatuByName);

router.use(verify);
router.get("/", con.index);

module.exports = router;
