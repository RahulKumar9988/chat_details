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
    console.log(parsedData);
    
  };

  return (
    <div className="app">
      <h1>MuseYard Chat Analyzer</h1>
      {!parsedData ? (
        <FileUpload onFileUpload={handleFileUpload} />
      ) : (
        <>
          <PatternDisplay parsedData={parsedData} />
          <Visualizer frequencyData={parsedData.frequency} />
        </>
      )}
    </div>
  );
};

export default App;
