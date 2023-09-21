const express = require('express');
const fs = require('fs');

const DATA_DIR = 'my_db';

const app = express();
app.use(express.json());

const hashtable = {};

app.post('/memory/:key', (req, res) => {
    hashtable[req.params.key] = req.body.data;
    res.send();
});

app.get('/memory/:key', (req, res) => {
    const key = req.params.key;
    if(key in hashtable) {
        res.send(hashtable[key]);
        return;
    }
    res.send('null');
});

app.post('/disk/:key', (req, res) => {
    const destinationFile = `${DATA_DIR}/${req.params.key}`;
    console.log(`Writing to.. ${DATA_DIR}/${req.params.key}`);
    fs.writeFileSync(destinationFile, req.body.data);
    res.send();
});

app.get('/disk/:key', (req, res) => {
    const destinationFile = `${DATA_DIR}/${req.params.key}`;
    console.log(`Reading from.. ${DATA_DIR}/${req.params.key}`);
    try {
        const data = fs.readFileSync(destinationFile);
        res.send(data);
        return;
    } catch(e) {
        res.send('null');
    }
});

app.listen(8000, () => {
    console.log('Listening on Port 8000..')
});