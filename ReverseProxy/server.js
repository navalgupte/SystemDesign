const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Listening on Port 8000..');
});

app.get('/hello', (req, res) => {
    console.log(req.headers);
    res.send('Hello All..\n');
});