import React from "react";

const PatternDisplay = ({ parsedData }) => {
  return (
    <div className="pattern-display">
      <h2>Content Analysis</h2>
      {Object.entries(parsedData).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-bold text-xl mt-5 mb-2">{category}</h3>
          <ul>
            {Array.isArray(items) ? (
              items.map((item, index) => <li className="m-2 " key={index}>{item}</li>)
            ) : (
              <li>No data available</li> 
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PatternDisplay;
