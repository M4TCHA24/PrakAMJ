const express = require('express');
const router = express.Router();

let ledState = false; // Simulasi state LED

// Get LED State
router.get('/', (req, res) => {
    res.json({ led: ledState });
});

// Update LED State
router.post('/', (req, res) => {
    const { state } = req.body;

    if (typeof state !== 'boolean') {
        return res.status(400).json({ error: 'State must be a boolean' });
    }

    ledState = state;
    res.json({ led: ledState });
});

module.exports = router;
