var express = require("express");
var router = express.Router();

var ctrlDigerleri = require("../controllers/digerleri");
var ctrlMekanlar = require("../controllers/mekanlar");

router.get("/", ctrlMekanlar.anaSayfa);
router.get("/mekan", ctrlMekanlar.mekanBilgisi);
router.get("/mekan/yorum/yeni", ctrlMekanlar.yorumEkle);
router.get("/hakkinda", ctrlDigerleri.hakkinda);

module.exports = router;
