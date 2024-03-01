// src/App.js

import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Content from './components/Content';
// import Header from './components/Header';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <img src="./logo_actually.png"className="logo"></img>
        </div>
        </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}

export default App;
