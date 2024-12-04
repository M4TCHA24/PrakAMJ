const mongoose = require('mongoose');

const TemperatureLogSchema = new mongoose.Schema({
    temperature: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TemperatureLog', TemperatureLogSchema);
