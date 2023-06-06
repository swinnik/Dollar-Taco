const router = require("express").Router();
const controller = require("../controllers/venders");

router.get("/venders", controller.get);
router.post("/venders", controller.post);

module.exports = router;
