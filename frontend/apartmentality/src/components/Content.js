// src/components/Content.js

import React from 'react';
import Home from './Home';
import Recommendation from './Recommendation.js';
import West_26 from './West_26';
import Compare from './Compare'

function Content({ activeTab }) {
  return (
    <div className="content">
      {activeTab === 'home' && <div><Home/></div>}
      {activeTab === 'favorite' && <div><West_26/></div>}
      {activeTab === 'compare' && <div><Compare/></div>}
    </div>
  );
}

export default Content;
