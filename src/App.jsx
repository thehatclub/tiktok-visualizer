import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import SearchHistory from "./components/SearchHistory";
import Chat from "./components/Chat";
import Comments from "./components/Comments";
import "./App.css";

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [userName, setUsername] = useState("No Username");
  const [view, setView] = useState("profile");
  const [selectedChatUser, setSelectedChatUser] = useState(null);

  const handleFileUpload = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setJsonData(data);
      setUsername(data.Profile["Profile Information"].ProfileMap.userName);
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div className="app-container">
      <Sidebar setView={setView} name={userName} />
      <div className="content-container container">
        {!jsonData && (
          <div className="card-mini">
            <input type="file" onChange={handleFileUpload} accept=".json" />
            <p>Please upload a JSON file to visualize the data.</p>
          </div>
        )}
        {jsonData ? (
          <>
            {view === "profile" && (
              <Profile
                data={jsonData.Profile["Profile Information"].ProfileMap}
              />
            )}
            {view === "search" && (
              <SearchHistory
                data={jsonData.Activity["Search History"].SearchList}
              />
            )}
            {view === "chat" && (
              <Chat
                data={jsonData["Direct Messages"]["Chat History"].ChatHistory}
                selectedChatUser={selectedChatUser}
                setSelectedChatUser={setSelectedChatUser}
              />
            )}
            {view === "comments" && (
              <Comments data={jsonData.Comment.Comments.CommentsList} />
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
