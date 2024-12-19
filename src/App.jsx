import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import PatternDisplay from "./components/PatternDisplay";
import Visualizer from "./components/Visualizer";
import { parseChat } from "./utils/parseChat";
import "./App.css";

const App = () => {
  const [parsedData, setParsedData] = useState(null);

  const handleFileUpload = (rawText) => {
    const data = parseChat(rawText);
    setParsedData(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center  justify-center p-6">
      <header className="mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 text-center">
          MuseYard Chat Analyzer
        </h1>
        <p className="text-gray-100 text-center text-lg mt-2">
          Upload your WhatsApp chat export and explore insights!
        </p>
      </header>

      {!parsedData ? (
        <FileUpload onFileUpload={handleFileUpload} />
      ) : (
        <div className="w-full flex flex-col items-center space-y-6">
          {/* Parsed data display */}
          <PatternDisplay parsedData={parsedData} />

          {/* Chart visualization */}
          {parsedData.frequency ? (
            <Visualizer frequencyData={parsedData.frequency} />
          ) : (
            <p className="text-gray-500 italic">No frequency data available.</p>
          )}
          
          {/* Reset button */}
          <button
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            onClick={() => setParsedData(null)}
          >
            Analyze Another Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
