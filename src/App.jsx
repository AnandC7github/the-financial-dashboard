import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('budget');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleSectionChange('budget')}>Budget</li>
          <li onClick={() => handleSectionChange('investments')}>Investments</li>
          <li onClick={() => handleSectionChange('reports')}>Reports</li>
          <li onClick={() => handleSectionChange('alerts')}>Alerts</li>
        </ul>
      </div>
      <div className="content">
        <h1>Financial Dashboard</h1>
        <p>Selected Section: {selectedSection}</p>
        {/* Add content for each section here */}
      </div>
    </div>
  );
};

export default App;
