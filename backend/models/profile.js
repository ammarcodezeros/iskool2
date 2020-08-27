const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    documentType: {type:String,require:true},
    profilefImage: { type: String, required: true}
});

module.exports = mongoose.model('profile', profileSchema);