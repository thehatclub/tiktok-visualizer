import React from "react";
import "./Comments.css"; // Optional CSS for styling

function Comments({ data }) {
  return (
    <div>
      <h2>Comments</h2>
      <div className="comments-container">
        {data.map((comment, index) => (
          <div key={index} className="comment">
            <p className="comment-content">
              <strong>{comment.Comment}</strong>
            </p>
            <p className="comment-date">{comment.Date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
