// ChatComponent.tsx
import React, { useState } from "react";
import axios from "axios";

const ChatComponent: React.FC = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    if (userMessage.trim() === "") return;

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/chat", {
        message: userMessage,
      });

      const chatResponse = response.data.response;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: userMessage },
        { role: "bot", content: chatResponse },
      ]);

      setUserMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <div className="chat-container shadow p-5">
        {chatHistory.map((item, index) => (
          <div
            key={index}
            className={`message ${
              item.role === "user" ? "user-message" : "bot-message"
            }`}
          >
            {item.content}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
