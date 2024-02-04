// src/components/Investments.jsx
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Investments = () => {
  const [investmentData, setInvestmentData] = useState(null);

  useEffect(() => {
    // Simulate fetching investment data from a server
    // In a real application, you would make an API call here
    const fetchData = async () => {
      try {
        // Simulating API call
        const response = await fetch('https://api.example.com/investments');
        const data = await response.json();
        setInvestmentData(data);

        // Initialize chart after data is fetched
        const ctx = document.getElementById('investmentChart').getContext('2d');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Stocks', 'Bonds', 'Real Estate'],
            datasets: [{
              data: data.investmentAllocation,
              backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
              borderWidth: 1
            }]
          }
        });
      } catch (error) {
        console.error('Error fetching investment data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Investments Section</h2>
      {investmentData ? (
        <div>
          <canvas id="investmentChart" width="400" height="200"></canvas>
          {/* Add more investment-related content using investmentData */}
        </div>
      ) : (
        <p>Loading investment data...</p>
      )}
    </div>
  );
};

export default Investments;
