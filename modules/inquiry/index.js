const router = require('express').Router();
const inquiryController = require('./controller');
const authMiddleware = require("../../middleware/auth");

router.route('/').post(inquiryController.addInquiry).get(authMiddleware, inquiryController.getInquiry);

router.delete('/:id', authMiddleware, inquiryController.deleteInquiry);

module.exports = router