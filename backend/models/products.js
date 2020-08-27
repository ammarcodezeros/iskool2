const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    email: { type: String, required: true },
    Dob: { type: Number, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: Number, required: true },
});

module.exports = mongoose.model('products', productSchema);