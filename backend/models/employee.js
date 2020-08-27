const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    experiencetype: { type: String, required: true },
    title: { type: String, required: true },
    organization: { 
        type: String, 
        required: true, 
    },
    location: {  type: String, required: true },
    start_end_year: { 
        type: Number,
        required: true,
    },
    certification: {  type: String, required: true },
});

module.exports = mongoose.model('employee', employeeSchema);