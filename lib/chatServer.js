const io = require('socket.io')();
const chatServer = {
  'createChat': function(server) {
    io.on('message', (message) => {

    })
  },


}

module.exports = chatServer;
