const router = require("express").Router();
const { adminSignUp } = require("./controller");


// Sign UP
router.post('/signup', adminSignUp)





module.exports = router




