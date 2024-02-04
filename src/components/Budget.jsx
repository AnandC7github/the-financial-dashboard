// src/components/Budget.jsx
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Budget = () => {
  const [budgetData, setBudgetData] = useState(null);

  useEffect(() => {
    // Simulate fetching budget data from a server
    // In a real application, you would make an API call here
    const fetchData = async () => {
      try {
        // Simulating API call
        const response = await fetch('https://api.example.com/budget');
        const data = await response.json();
        setBudgetData(data);

        // Initialize chart after data is fetched
        const ctx = document.getElementById('budgetChart').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Category 1', 'Category 2', 'Category 3'],
            datasets: [{
              label: 'Spending',
              data: data.spendingByCategory,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      } catch (error) {
        console.error('Error fetching budget data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Budget Section</h2>
      {budgetData ? (
        <div>
          <p>Total Budget: ${budgetData.totalBudget}</p>
          <canvas id="budgetChart" width="400" height="200"></canvas>
          {/* Add more budget-related content using budgetData */}
        </div>
      ) : (
        <p>Loading budget data...</p>
      )}
    </div>
  );
};

export default Budget;
