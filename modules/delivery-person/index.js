const router = require('express').Router();
const deliveryPersonController = require('./controller');
const authMiddleware = require("../../middleware/auth");

router.use(authMiddleware)

router.route('/').post(deliveryPersonController.addDeliveryPerson).get(deliveryPersonController.getDeliveryPerson);

router.route('/:id').patch(deliveryPersonController.updateDeliveryPerson).delete(deliveryPersonController.deleteDeliveryPerson);

module.exports = router