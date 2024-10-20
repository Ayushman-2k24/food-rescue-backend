const router = require("express").Router();
const requestController = require("./controller")
const authMiddleware = require("../../middleware/auth");

router.route('/').post(requestController.addRequest).get(authMiddleware, requestController.getRequest)
router.delete('/:id', authMiddleware, requestController.deleteRequest)





module.exports = router




