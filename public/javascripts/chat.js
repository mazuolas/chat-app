class Chat {
  constructor(socket){
    this.socket = socket;
  }

  sendMessage(text) {
      this.socket.emit('message', {text: text})
  }
}

export default Chat;
