const express = require('express');
const os = require('os');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        hostname: os.hostname(),
        datetime: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
