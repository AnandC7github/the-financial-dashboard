// src/components/Alerts.jsx
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Alerts = () => {
  const [alertData, setAlertData] = useState(null);

  useEffect(() => {
    // Simulate fetching alert data from a server
    // In a real application, you would make an API call here
    const fetchData = async () => {
      try {
        // Simulating API call
        const response = await fetch('https://api.example.com/alerts');
        const data = await response.json();
        setAlertData(data);

        // Initialize chart after data is fetched
        const ctx = document.getElementById('alertChart').getContext('2d');
        new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Security', 'Market', 'Regulatory', 'Operational'],
            datasets: [{
              label: 'Alerts Count',
              data: data.alertCount,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          }
        });
      } catch (error) {
        console.error('Error fetching alert data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Alerts Section</h2>
      {alertData ? (
        <div>
          <canvas id="alertChart" width="400" height="200"></canvas>
          {/* Add more alert-related content using alertData */}
        </div>
      ) : (
        <p>Loading alert data...</p>
      )}
    </div>
  );
};

export default Alerts;
