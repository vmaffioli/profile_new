const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

const data = require('./data.json');
app.use(express.static(path.join(__dirname, './client/build/')));

app.get('/api/content', (req, res) => {
    res.send(require('./data.json'));
  });

//app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, ''));
//});



app.listen(port, () => console.log(`Listening on port ${port}`));