import Chat from './chat.js';
class ChatUI {
  constructor(socket){
    this.chat = new Chat(socket)
    this.room = document.getElementById('room');
    this.msgList = document.getElementById('msg-list');
    this.roomList = document.getElementById('room-list');
    this.input = document.querySelector('input');
  }
  addMsg(msg){
    let newMsg = document.createElement('li');

    newMsg.textContent = msg;
    this.msgList.appendChild(newMsg);
  }

  getInput(){

  }
}
export default ChatUI;
