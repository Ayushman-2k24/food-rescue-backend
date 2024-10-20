const express = require("express");
const router = express.Router();

router.use("/", require("../modules/admin"));
router.use("/request", require("../modules/request"));
router.use("/inquiry", require("../modules/inquiry"));
router.use("/delivery-person", require("../modules/delivery-person"));


module.exports = router;