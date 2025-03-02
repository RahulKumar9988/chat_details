## Chat Analyzer

 Chat Analyzer is a web application that allows users to upload their WhatsApp chat exports in `.txt` format. The app processes the uploaded file to extract meaningful insights, identify patterns, and provide a visual representation of the data.

---

## Features

1. **File Upload**:
   - Users can upload a WhatsApp `.txt` file for analysis.
   - Basic error handling for invalid file types or formats.

2. **Content Parsing**:
   - Automatically parses chat data to extract:
     - Links/URLs
     - Quotes and insights
     - Personal notes/reflections
     - Message frequency by date

3. **Pattern Display**:
   - Categorizes and displays extracted content in a clean and readable format.

4. **Visualization**:
   - Generates a bar chart to show message frequency over time.

5. **Reset Option**:
   - Allows users to analyze another file without refreshing the page.

---

## Technology Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Chart.js**: Library for creating responsive charts.

### Utilities
- **Custom Parsing Function**: Extracts and organizes data from WhatsApp `.txt` files.

---

## Installation

### Prerequisites
- Node.js (version 14+)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/RahulKumar9988/chat_details.git
   cd chat_details
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. On the home page, upload your WhatsApp `.txt` file.
2. The app will process and categorize the content into:
   - Links
   - Quotes
   - Notes
   - Frequency analysis
3. View the categorized data and explore the visual representation of message frequency.
4. Use the "Analyze Another Chat" button to reset and upload a new file.

---

## Folder Structure

```
src/
|-- components/
|   |-- FileUpload.jsx         # Handles file upload functionality
|   |-- PatternDisplay.jsx     # Displays parsed content
|   |-- Visualizer.jsx         # Renders frequency chart
|
|-- utils/
|   |-- parseChat.js           # Logic for parsing WhatsApp chat exports
|
|-- App.jsx                    # Main application component
|-- index.css                  # Global styles
|-- index.js                   # Entry point
```

---

## Styling
- The application uses **Tailwind CSS** for a modern and responsive design.
- Key features include:
  - Responsive typography and layout
  - Shadow effects and rounded corners for a polished UI

---

## Improvements in Future Versions
- **Authentication**: Allow users to save their analyses.
- **Database Integration**: Store parsed data for retrieval.
- **Advanced Insights**: Integrate AI for deeper pattern detection.
- **Export Options**: Allow users to download analyzed data.

---


---

## created by rahul kumar

