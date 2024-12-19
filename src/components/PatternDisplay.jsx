import React from "react";

const PatternDisplay = ({ parsedData }) => {
  return (
    <div className="pattern-display">
      <h2>Content Analysis</h2>
      {Object.entries(parsedData).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {Array.isArray(items) ? (
              items.map((item, index) => <li key={index}>{item}</li>)
            ) : (
              <li>No data available</li> // Handle non-array or empty data gracefully
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PatternDisplay;
