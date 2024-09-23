import React from "react";

function Sidebar({ setView, name }) {
  return (
    <div className="sidebar">
      <img src="/logo.png" width={"100px"} />
      <div className="brutalist-container">
        <input value={name} className="brutalist-input" type="text" disabled />
        <label className="brutalist-label">Tiktok User</label>
      </div>
      <button className="btn-dark" onClick={() => setView("profile")}>
        Profile
      </button>
      <button className="btn-hollow" onClick={() => setView("search")}>
        Search History
      </button>
      <button className="btn-dark" onClick={() => setView("chat")}>
        Chat
      </button>
      <button className="btn-hollow" onClick={() => setView("comments")}>
        Comments
      </button>
    </div>
  );
}

export default Sidebar;
