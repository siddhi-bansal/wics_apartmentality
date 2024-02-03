// src/components/Tabs.js

import React from 'react';

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</button>
      <button onClick={() => setActiveTab('favorite')} className={activeTab === 'favorite' ? 'active' : ''}>Favorite</button>
      <button onClick={() => setActiveTab('recommendations')} className={activeTab === 'recommendations' ? 'active' : ''}>Recommendations</button>
      <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>Profile</button>
    </div>
  );
}

export default Tabs;