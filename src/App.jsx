// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Budget from './components/Budget';
import Investments from './components/Investments';
import Reports from './components/Reports';
import Alerts from './components/Alerts';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('budget');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'budget':
        return <Budget />;
      case 'investments':
        return <Investments />;
      case 'reports':
        return <Reports />;
      case 'alerts':
        return <Alerts />;
      default:
        return null;
    }
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
        {renderSection()}
      </div>
    </div>
  );
};

export default App;
