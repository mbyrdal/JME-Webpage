const { readFile } = require('fs').promises;

const path = require('path');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.send(await readFile('./index.html', 'utf8'));
});

// Serve CSS and images as static files from 'public' folder
app.use(express.static(__dirname + '/public'))

// Use port 9001 unless hosted on external service (not NodeJS)
app.listen(process.env.PORT || 9001, () => console.log(`App now available on http://localhost:9001`));