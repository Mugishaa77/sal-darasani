import React, { useState } from 'react';
import './SwitchComponent.css'; // Import CSS file for styling

function SwitchComponent() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="switch-container inter-text">
      <div
        className={`switch-tab ${activeTab === 'Find by Search' ? 'active' : ''}`}
        onClick={() => handleTabChange('Find by Search')}
      >
        Find by Search
      </div>
      <div
        className={`switch-tab ${activeTab === 'Find by Subject' ? 'active' : ''}`}
        onClick={() => handleTabChange('Find by Subject')}
      >
        Find by Subject
      </div>
      <div
        className={`switch-tab ${activeTab === 'View All Tutors' ? 'active' : ''}`}
        onClick={() => handleTabChange('View All Tutors')}
      >
        View All Tutors
      </div>
      <div className={`switch-slider ${activeTab}`} />
    </div>
  );
}

export default SwitchComponent;