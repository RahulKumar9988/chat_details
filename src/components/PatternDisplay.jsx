import React from "react";

const PatternDisplay = ({ parsedData }) => {
  return (
    <div className=" w-full">
      <h2 className="text-2xl md:text-4xl font-semibold text-white text-center">
        Content Analysis
      </h2>

      {parsedData && Object.keys(parsedData).length > 0 ? (
        Object.entries(parsedData).map(([category, items]) => (
          <div key={category} className="mt-6">
            <h3 className="font-bold text-lg md:text-xl text-blue-600">{category}</h3>
            <ul className="list-disc list-inside">
              {Array.isArray(items) && items.length > 0 ? (
                items.map((item, index) => (
                  <li className="text-gray-100 mt-2 ml-3" key={index}>
                    {item}
                  </li>
                ))
              ) : (
                <li className="text-gray-100 ">No data available</li>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p className="text-gray-100 text-center mt-5">No content to display.</p>
      )}
    </div>
  );
};

export default PatternDisplay;
