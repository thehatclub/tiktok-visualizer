import React, { useState } from "react";
import "./Chat.css"; // Make sure the CSS file is included

function Chat({ data, selectedChatUser, setSelectedChatUser }) {
  const [sortOrder, setSortOrder] = useState("newest"); // Default sorting order is "newest to oldest"
  const currentUser = "tannersmiley2";

  // If no user is selected, show the list of users
  if (!selectedChatUser) {
    return (
      <div>
        <h2>Chat List</h2>
        <ul>
          {Object.keys(data).map((chatWith, index) => (
            <li key={index}>
              <button onClick={() => setSelectedChatUser(chatWith)}>
                {chatWith}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // If a user is selected, show that user's chat messages
  const messages = data[selectedChatUser];

  // Function to sort messages based on the selected order
  const sortedMessages = [...messages].sort((a, b) => {
    const dateA = new Date(a.Date);
    const dateB = new Date(b.Date);
    if (sortOrder === "newest") {
      return dateB - dateA; // Newest to oldest
    } else {
      return dateA - dateB; // Oldest to newest
    }
  });

  return (
    <div>
      <button onClick={() => setSelectedChatUser(null)}>
        Back to Chat List
      </button>
      <h2>{selectedChatUser}</h2>

      {/* Dropdown to select sorting order */}
      <label htmlFor="sortOrder">Sort by:</label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="newest">Newest to Oldest</option>
        <option value="oldest">Oldest to Newest</option>
      </select>

      <div className="chat-container">
        {sortedMessages.map((message, i) => (
          <div
            key={i}
            className={`chat-bubble-container ${
              message.From === currentUser ? "right" : "left"
            }`}
          >
            <div className="chat-info">
              <p className="chat-sender">{message.From}</p>
              <p className="chat-date">{message.Date}</p>
            </div>
            <div className="chat-bubble">
              <p>{message.Content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
