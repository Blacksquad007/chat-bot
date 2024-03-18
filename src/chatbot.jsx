import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import "./App.css";
import config from "./comp/config";
import MessageParser from "./comp/MessageParser";
import ActionProvider from "./comp/ActionProvider";

function Hello() {
  return (
    <div className="App" >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}


export default Hello;