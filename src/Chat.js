import React, { useState } from 'react';
import './chat.css'; 

function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello, ask me anything!", user: 'ChatGPT' },
    // { text: "I'd like to know more about your services.", user: 'user' },
    // { text: "Sure, we offer a variety of services including web development, mobile app development, and AI solutions.", user: 'ChatGPT' },
    // { text: "That sounds great! Can you tell me more about your AI solutions?", user: 'user' },
    // { text: "Of course! Our AI solutions include natural language processing, computer vision, and recommendation systems.", user: 'ChatGPT' },
    // { text: "That's exactly what I'm looking for. How do I get started?", user: 'user' },
    // { text: "You can get started by contacting our sales team. They will guide you through the process.", user: 'ChatGPT' },
  ]);

  const addMessage = () => {
    const newMessage = {
      text: 'bogus',
      user: 'user'
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="messages-inner">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your query here"
        />
        <button className="chat-input-button" onClick={addMessage}>Ask</button>
      </div>
    </div>
  );
}

export default Chat;
