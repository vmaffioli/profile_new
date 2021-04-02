const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './client/build/')));



app.get('/.well-known/pki-validation/', (req, res) => {
  res.sendFile(path.join(__dirname, './SSL/B1D20171F33F47D8D150818A4473ABC6.txt'));
});



app.listen(port, () => console.log(`Listening on port ${port}`));