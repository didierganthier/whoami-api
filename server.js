const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/whoami', (req, res) => {
    const ipaddress = req.ip;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});