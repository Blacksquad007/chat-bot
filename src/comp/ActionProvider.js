class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello, how can I assist you?");
    this.updateChatbotState(message);
  }

  goodbye() {
    const message = this.createChatBotMessage("Goodbye, have a great day!");
    this.updateChatbotState(message);
  }
  hi() {
    const message = this.createChatBotMessage("hi, shri how are u?");
    this.updateChatbotState(message);
  }

  unknown() {
    const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Could you please rephrase?");
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;