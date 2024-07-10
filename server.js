const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/search', async (req, res) => {
    try {
        const { keyword } = req.body;
        // Here you would integrate with a real domain search API
        // For now, we'll use a mock response
        const mockApiResponse = [
            { domain: `${keyword}.com`, available: false },
            { domain: `${keyword}.net`, available: true },
            { domain: `${keyword}.org`, available: true },
        ];
        res.json(mockApiResponse);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching domains' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});