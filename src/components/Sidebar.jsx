import React from "react";

function Sidebar({ setView }) {
  return (
    <div
      style={{
        width: "200px",
        background: "#f0f0f0",
        height: "100vh",
        padding: "10px",
      }}
    >
      <button onClick={() => setView("profile")}>Profile</button>
      <button onClick={() => setView("search")}>Search History</button>
      <button onClick={() => setView("chat")}>Chat</button>
      <button onClick={() => setView("comments")}>Comments</button>
    </div>
  );
}

export default Sidebar;
