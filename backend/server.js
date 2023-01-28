const express = require('express');
const morgan = require('morgan');
const router = require('./routes/endpoints');
const path = require('path');
const app = express();

app.use(morgan());
app.use(express.json());
 
app.listen(3000, () => {
  console.log('Your app is listening on port 3000');
});

// serves dist folder resources by default
app.use(express.static('./dist'));

app.use(router);

/**
 * The following causes the server to serve the index.html when unfamiliar paths are requested.
 * Having a GET route that accepts '*' (any pattern) is generally unwise.
 * This code is for learning purposes though so some details need to be swept under the rug for later.
 * Its purpose is to allow refreshes and manually typed URLs to work.
 */
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});