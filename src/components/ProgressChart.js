import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function ProgressChart({ tasks }) {
  const completed = tasks.filter(t => t.completed).length;
  const pending = tasks.length - completed;

  const data = {
    labels: ['Completed', 'Pending'],
    datasets: [{
      data: [completed, pending],
      backgroundColor: ['#4caf50', '#f44336'],
      borderWidth: 1,
    }]
  };

  return (
    <div className="chart-container">
      <h3>📈 Progress Overview</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default ProgressChart;
