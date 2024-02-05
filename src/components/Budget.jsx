// src/components/Budget.jsx
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Budget = () => {
  // Version 1: Fetching and displaying budget data without expense tracking
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

  // Version 2: Adding expense tracking to the existing component
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('Category 1');

  const handleAddExpense = () => {
    // Simulate updating expense data
    const updatedData = {
      ...budgetData,
      spendingByCategory: budgetData.spendingByCategory.map((value, index) =>
        index === 0 && expenseCategory === 'Category 1'
          ? value + parseFloat(expenseAmount)
          : value
      ),
    };

    // Simulate updating the chart
    const ctx = document.getElementById('budgetChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
          {
            label: 'Spending',
            data: updatedData.spendingByCategory,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Update state with new data
    setBudgetData(updatedData);
    setExpenseAmount('');
    setExpenseCategory('Category 1');
  };

  return (
    <div>
      <h2>Budget Section</h2>
      {budgetData ? (
        <div>
          <p>Total Budget: ${budgetData.totalBudget}</p>
          <canvas id="budgetChart" width="400" height="200"></canvas>

          {/* Expense tracking form */}
          <div>
            <h3>Add Expense</h3>
            <label>
              Amount:
              <input
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
              />
            </label>
            <label>
              Category:
              <select
                value={expenseCategory}
                onChange={(e) => setExpenseCategory(e.target.value)}
              >
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>
            </label>
            <button onClick={handleAddExpense}>Add Expense</button>
          </div>
        </div>
      ) : (
        <p>Loading budget data...</p>
      )}
    </div>
  );
};

export default Budget;
