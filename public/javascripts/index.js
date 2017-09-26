import ChatUI from './chatUI.js';
document.addEventListener('DOMContentLoaded', () => {
  const io = require('socket.io-client')();
  const myChat = new ChatUI(io);

  myChat.addMsg('hello');
})
