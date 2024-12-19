import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Visualizer = ({ frequencyData }) => {
  const data = {
    labels: Object.keys(frequencyData), // Dates
    datasets: [
      {
        label: "Message Frequency",
        data: Object.values(frequencyData), // Count for each date
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Message Frequency Analysis",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Visualizer;
