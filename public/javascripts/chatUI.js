import './chat.js';
class ChatUI {
  constructor(socket){
    this.chat = new Chat(socket)
  }
}
