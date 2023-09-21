const express = require('express');
const app =express();

app.use(express.json());
app.listen(8000, () => console.log('Listening on Port 8000..'));

app.get('/hello', (req, res) => {
    console.log('Headers: ', req.headers);
    console.log('Method: ', req.method);
    res.send('Received GET Request..\n');
});

app.post('/hello', (req, res) => {
    console.log('Headers: ', req.headers);
    console.log('Method: ', req.method);
    console.log('Body: ', req.body);
    res.send('Received POST Request..\n');
});