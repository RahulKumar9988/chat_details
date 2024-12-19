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
    maintainAspectRatio: false, // Chart adapts to container height
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14, // Adjust font size
          },
        },
      },
      title: {
        display: true,
        text: "Message Frequency Analysis",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="h-[60vh] bg-white shadow-lg rounded-lg p-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Visualizer;
