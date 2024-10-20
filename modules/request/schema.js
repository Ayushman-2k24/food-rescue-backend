const { mongoose } = require('../../db/db');
const CONSTANT = require('../../utils/CONSTANT');

const requestSchema = new mongoose.Schema({
    donorName: mongoose.Schema.Types.String,
    donarEmail: mongoose.Schema.Types.String,
    donarMobile: mongoose.Schema.Types.String,
    foodCategory: mongoose.Schema.Types.String,
    foodQuantity: mongoose.Schema.Types.Number,
    preparationDateTime: mongoose.Schema.Types.Date,
    note: mongoose.Schema.Types.String
    //   donorName: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,  // Field is required
    // },
    // donorEmail: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,  // Field is required
    // },
    // donorMobile: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,  // Field is required
    // },
    // foodCategory: {
    //     type: mongoose.Schema.Types.String,
    //     required: true,  // Field is required
    // },
    // foodQuantity: {
    //     type: mongoose.Schema.Types.Number,
    //     required: true,  // Field is required
    // },
    // preparationDateTime: {
    //     type: mongoose.Schema.Types.Date,
    //     required: true,  // Field is required
    // },
    // note: {
    //     type: mongoose.Schema.Types.String,
    //     required: false,  // Field is optional
    // }

})

const Request = mongoose.model(CONSTANT.SCHEMA_STRING.REQUEST, requestSchema);

module.exports = { Request }