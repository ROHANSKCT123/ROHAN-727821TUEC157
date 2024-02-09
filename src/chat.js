import React, { useState } from 'react';
import './chat.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessageToAI = async (message) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace with your OpenAI API key
        },
        body: JSON.stringify({ message })
      });

      if (response.ok) {
        const data = await response.json();
        return data.message;
      } else {
        console.error('Failed to fetch response from OpenAI API');
        return "Hii Buddy..";
      }
    } catch (error) {
      console.error('Error:', error);
      return "I'm sorry, an error occurred while processing your request.";
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const userMessage = { sender: 'RAMU', text: inputMessage };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInputMessage('');

      try {
        const aiReply = await sendMessageToAI(inputMessage);
        const aiMessage = { sender: 'SOMU', text: aiReply };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error sending message to AI:', error);
      }
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'Me' ? 'sent' : 'received'}`}>
            <span className="sender">{message.sender}: </span>
            <span className="text">{message.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={e => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
