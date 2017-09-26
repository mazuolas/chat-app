const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const port = 3000;
const chatServer = require('./lib/chatServer.js');

app.use(express.static('public'));

chatServer.listen(http);

app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, 'index.html'));
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
})
