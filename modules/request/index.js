const router = require("express").Router();
const requestController = require("./controller")


router.route('/').post(requestController.addRequest).get(requestController.getRequest)
router.delete('/:id', requestController.deleteRequest)





module.exports = router




