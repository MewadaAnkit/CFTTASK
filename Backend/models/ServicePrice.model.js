const mongoose = require('mongoose');

const servicePriceSchema = new mongoose.Schema({
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Hourly', 'Weekly', 'Monthly'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ServicePrice', servicePriceSchema);