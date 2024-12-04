const express = require('express');
const TemperatureLog = require('../models/DHT11');
const router = express.Router();

// Get All Temperature Logs
router.get('/all', async (req, res) => {
    try {
        const logs = await TemperatureLog.find().sort({ timestamp: -1 });
        res.json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/now', async (req, res) => {
    try {
        const latestLog = await TemperatureLog.findOne().sort({ timestamp: -1 });
        if (!latestLog) {
            return res.status(404).send('No temperature data available');
        }
        res.send(latestLog.temperature.toString()); // Kirim hanya nilai suhu
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add Temperature Log
router.post('/', async (req, res) => {
    const { temperature } = req.body;

    if (!temperature) {
        return res.status(400).json({ error: 'Temperature is required' });
    }

    try {
        const newLog = new TemperatureLog({ temperature });
        await newLog.save();
        res.status(201).json(newLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
