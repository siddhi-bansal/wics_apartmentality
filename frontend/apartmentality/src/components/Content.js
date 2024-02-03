// src/components/Content.js

import React from 'react';
import Home from './Home';
import Recommendation from './Recommendation.js';

function Content({ activeTab }) {
  return (
    <div className="content">
      {activeTab === 'home' && <div><Home/></div>}
      {activeTab === 'favorite' && <div>Favorite Content</div>}
      {activeTab === 'recommendations' && <div><Recommendation/></div>}
      {activeTab === 'compare' && <div>Comparisions</div>}
    </div>
  );
}

export default Content;
