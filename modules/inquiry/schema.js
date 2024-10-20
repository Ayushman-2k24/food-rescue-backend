const CONSTANT = require('../../utils/CONSTANT');
const { mongoose } = require('.././../db/db');

const InquirySchema = new mongoose.Schema({
    name: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    mobile: mongoose.Schema.Types.String,
    message: mongoose.Schema.Types.String

});

const Inquiry = mongoose.model(CONSTANT.SCHEMA_STRING.INQUIRY, InquirySchema);

module.exports = {
    Inquiry
}