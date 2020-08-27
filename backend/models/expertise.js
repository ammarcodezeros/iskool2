const mongoose = require('mongoose');

const expertiseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    languageispeak: { type: String, required: true },
    languageproficiency: { type: String, required: true },
});


module.exports = mongoose.model('expertise', expertiseSchema);

