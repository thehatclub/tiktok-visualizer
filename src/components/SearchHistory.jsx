import React from "react";

function SearchHistory({ data }) {
  return (
    <div>
      <h2>Search History</h2>
      <ul>
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
