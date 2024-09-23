import React from "react";
import "./Comments.css"; // Optional CSS for styling

function Comments({ data }) {
  return (
    <div>
      <h2 className="card-mini">Comments</h2>
      <ul className="card-button">
        {data.map((comment, index) => (
          <li key={index}>
            {comment.Date}: {comment.Comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
