// src/components/Content.js

import React from 'react';
import Home from './Home';
import Recommendation from './Recommendation.js';
import West_26 from './West_26';

function Content({ activeTab }) {
  return (
    <div className="content">
      {activeTab === 'home' && <div><Home/></div>}
      {activeTab === 'favorite' && <div><West_26/></div>}
      {activeTab === 'recommendations' && <div><Recommendation/></div>}
      {activeTab === 'compare' && <div>Comparisons</div>}
    </div>
  );
}

export default Content;
