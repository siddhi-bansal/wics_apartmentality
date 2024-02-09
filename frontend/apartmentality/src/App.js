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
          <img src="./logo-final.png"className="logo"></img>
          {/* <img src="./logo-lc.png"></img> */}
          {/* <img src="./house-icon"></img> */}
          {/* <h1>Apartmentality <img src='./logo192.png'></img></h1>
          <p>Find Your ✨ New Mojo Dojo Dreamhouse ✨ Today!</p> */}
          {/* <p>✨ Find Your New Mojo Dojo Dreamhouse Today! ✨</p> */}
        </div>
        </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}

export default App;
