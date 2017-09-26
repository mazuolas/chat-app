const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, 'index.html'));
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
})
