import React from "react";

function SearchHistory({ data }) {
  return (
    <div>
      <h2 className="card-mini">Search History</h2>
      <ul className="card-button">
        {data.map((search, index) => (
          <li key={index}>
            {search.Date}: {search.SearchTerm}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
