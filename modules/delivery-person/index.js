const router = require('express').Router();
const deliveryPersonController = require('./controller');

router.route('/').post(deliveryPersonController.addDeliveryPerson).get(deliveryPersonController.getDeliveryPerson);

router.route('/:id').patch(deliveryPersonController.updateDeliveryPerson).delete(deliveryPersonController.deleteDeliveryPerson);

module.exports = router