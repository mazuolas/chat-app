import ChatUI from './chatUI.js';
document.addEventListener('DOMContentLoaded', () => {
  const io = require('socket.io-client')();
  console.log(ChatUI);
  const myChat = new ChatUI(io);
  myChat.addMsg('hello');
})
