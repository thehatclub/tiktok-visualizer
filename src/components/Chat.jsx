import React, { useState } from "react";
import "./Chat.css"; // Make sure the CSS file is included

function Chat({ data, selectedChatUser, setSelectedChatUser }) {
  const [sortOrder, setSortOrder] = useState("newest"); // Default sorting order is "newest to oldest"
  const currentUser = "tannersmiley2";

  // Helper function to extract just the username from the chat key
  const extractUsername = (chatKey) => {
    return chatKey.replace("Chat History with ", "");
  };

  // If no user is selected, show the list of users
  if (!selectedChatUser) {
    return (
      <div className="chat-buttons-container">
        <h2 className="card-mini">Chat List</h2>
        {Object.keys(data).map((chatWith, index) => (
          <div className="card" key={index}>
            <div className="card-details">
              <p className="text-title">{extractUsername(chatWith)}</p>
              <p className="text-body">{data[chatWith].length} messages</p>
            </div>
            <button
              onClick={() => setSelectedChatUser(chatWith)}
              className="card-button"
            >
              View
            </button>
          </div>
        ))}
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
      <button className="card-mini" onClick={() => setSelectedChatUser(null)}>
        Back to Chat List
      </button>
      <div className="card-mini">
        <h2 className="card-mini">{selectedChatUser}</h2>

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
      </div>

      <div className="chat-container card-mini">
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
      <h2 className="card-mini">End of Chat Log</h2>
    </div>
  );
}

export default Chat;
