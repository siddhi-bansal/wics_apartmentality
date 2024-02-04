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
      {/* <Header /> */}
      <div className="header">
        {/* <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/1200px-University_of_Texas_at_Austin_seal.svg.png"></img>
        </div> */}
        <div className="title">
          <h1>Apartmentality</h1>
          <p>Find Your New Mojo Dojo Dreamhouse Today!</p>
        </div>
        </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}

export default App;
