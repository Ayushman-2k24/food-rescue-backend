const mongoose = require('mongoose');
const env = require("dotenv").config().parsed

// Connect to MongoDB
mongoose.connect(env.DB_CONNECTION_STRING);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database connection successful');
});

db.on('error', (err) => {
    console.error('Database connection error:', err);
});

db.on('disconnected', () => {
    console.log('Database disconnected');
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    userName: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    purchasedCourses: [{
        ref: "Course",
        type: mongoose.Schema.Types.ObjectId,

    }]

});

const CourseSchema = new mongoose.Schema({
    // Schema definition here,
    title: mongoose.Schema.Types.String,
    description: mongoose.Schema.Types.String,
    price: mongoose.Schema.Types.Number,
    imageLink: mongoose.Schema.Types.String
});

// const Admin = mongoose.model('Admin', AdminSchema);
// const User = mongoose.model('User', UserSchema);
// const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    // Admin,
    // User,
    // Course,
    mongoose
}