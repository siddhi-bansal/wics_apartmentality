// src/components/Content.js

import React from 'react';

function Content({ activeTab }) {
  return (
    <div className="content">
      {activeTab === 'home' && <div>Home</div>}
      {activeTab === 'favorite' && <div>Favorite Content</div>}
      {activeTab === 'recommendations' && <div>Recommendations Content</div>}
      {activeTab === 'profile' && <div>Profile Content</div>}
    </div>
  );
}

export default Content;
