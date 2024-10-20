const { mongoose } = require('../../db/db');
const CONSTANT = require('../../utils/CONSTANT');


const DeliveryPersonSchema = new mongoose.Schema({
    // Schema definition here
    name: mongoose.Schema.Types.String,
    email: mongoose.Schema.Types.String,
    mobile: mongoose.Schema.Types.String,
    startTime: mongoose.Schema.Types.String,
    endTime: mongoose.Schema.Types.String,
});

const DeliveryPerson = mongoose.model(CONSTANT.SCHEMA_STRING.DELIVERY_PERSON, DeliveryPersonSchema);

module.exports = {
    DeliveryPerson
}