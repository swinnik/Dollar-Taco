const router = require("express").Router();
const { get, post } = require("../controllers/venders.js");

router.get("/venders", get);
router.post("/venders", post);

module.exports = router;
