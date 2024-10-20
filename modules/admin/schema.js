const { mongoose } = require('../../db/db');
const CONSTANT = require('../../utils/CONSTANT');

const AdminSchema = new mongoose.Schema({
    // Schema definition here
    email: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
});

const Admin = mongoose.model(CONSTANT.SCHEMA_STRING.ADMIN, AdminSchema);

module.exports = {
    Admin,
}