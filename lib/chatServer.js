const io = require('socket.io');

let chat;
const chatServer = {
  createChat(server) {
    io.on('message', (message) => {

    })
  },

  listen(server) {
    chat = io(server)
    chat.on('connection', function() {
      console.log('connected');
    })
  }

}

module.exports = chatServer;
