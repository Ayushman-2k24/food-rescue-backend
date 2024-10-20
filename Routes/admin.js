const express = require("express");
const router = express.Router();

router.use("/", require("../modules/admin"));
router.use("/request", require("../modules/request"));


module.exports = router;