const router = require('express').Router();
const inquiryController = require('./controller');

router.route('/').post(inquiryController.addInquiry).get(inquiryController.getInquiry);

router.delete('/:id', inquiryController.deleteInquiry);

module.exports = router