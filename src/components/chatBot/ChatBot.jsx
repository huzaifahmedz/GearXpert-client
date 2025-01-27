import React, { useState } from "react";
import botImage from "../../assets/images/Banners-greaXpert/chat-bot.png";
import "./ChatBot.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // Toggle chat window
  const [messages, setMessages] = useState([{ text: "Hello! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");

      // Simulated bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Thank you for reaching out!", sender: "bot" }]);
      }, 1000);
    }
  };




  useGSAP(()=>{
    gsap.from(".chatbot",{
      opacity:0,
      duration:1,
     
    })
  })

  return (
    <>
      {/* Chatbot Icon */}
      <div
        className=" w-12 h-12 lg:w-24 lg:h-24 fixed right-8 bottom-8 z-50 cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <img src={botImage} alt=" Chat Bot Icon" className="chatbot w-full h-full object-contain" />
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className=" fixed right-5 bottom-24 z-30 w-72 lg:w-96 h-80 bg-black border-2 border-red-500 rounded-lg flex flex-col">
          {/* Chat Header */}
          <div className="bg-red-500 text-white text-center py-2 rounded-t-lg">
            <h3>Chat with Us</h3>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    message.sender === "user" ? "bg-red-500" : "bg-gray-700"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className=" w-full bg-gray-800 flex flex-col lg:flex-row items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 text-sm bg-gray-700 text-white rounded focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
