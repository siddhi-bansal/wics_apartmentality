import React, { useState } from 'react';
import "./Compare.css"

function Compare() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const textStyleGreen = {
    fontSize: '18px', // Set the desired font size
    color: 'green',
    fontFamily: 'Georgia',
    textAlign: 'center',
  };

  const textStyleRed = {
    fontSize: '18px', // Set the desired font size
    color: 'red',
    fontFamily: 'Georgia',
    textAlign: 'center',
  };

  console.log("Hi " + setSelectedOption1);
  console.log("Hi " + setSelectedOption2);

  const getInfo = (option) => {
    switch (option) {
      case 'Moontower':
        return (
          <div>Hi Moontower!</div>
        );
      case '26 West':
        return (
          <div>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Pricing</h2>
            <p style={{textAlign: 'center', fontFamily: 'Georgia'}}>Rent prices start at $1274</p>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Proximity to Campus</h2>
            <p style={{textAlign: 'center', fontFamily: 'Georgia',}}>Located 1 mile from campus.</p>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Based on Your Profile</h2>
            <p style={{textAlign: 'center', fontFamily: 'Georgia'}}>75% match</p>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Amenities: </h2>
              <div style={textStyleGreen}>Fitness Center</div>
              <div style={textStyleGreen}>Free Printing</div>
              <div style={textStyleGreen}>Outdoor Patio</div>
              <div style={textStyleGreen}>Pet Friendly</div>
              <div style={textStyleGreen}>Study Rooms</div>
              <div style={textStyleRed}>Game Room</div>
              <div style={textStyleGreen}>Rooftop</div>
              <div style={textStyleGreen}>Parking</div>
              <div style={textStyleGreen}>Pool</div>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Website</h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>To learn more, visit the <a href="https://www.americancampus.com/student-apartments/tx/austin/26-west#amenities" target="_blank" rel="noopener noreferrer">26 West Website</a>
            </p>
          </div>
        );
      case 'Lark Austin':
        return (
          <div>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Pricing</h2>
            <p style={{textAlign: 'center', fontFamily: 'Georgia'}}>Rent prices start at $1375</p>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Proximity to Campus</h2>
            <p style={{textAlign: 'center', fontFamily: 'Georgia'}}>Located 0.5 mile from campus.</p>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Based on Your Profile</h2>
            <p style={{textAlign: 'center', fontFamily: 'Georgia'}}>53% match</p>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Amenities:</h2>
              <div style={textStyleGreen}>Fitness Center</div>
              <div style={textStyleGreen}>Free Printing</div>
              <div style={textStyleRed}>Outdoor Patio</div>
              <div style={textStyleGreen}>Pet Friendly</div>
              <div style={textStyleGreen}>Study Rooms</div>
              <div style={textStyleGreen}>Game Room</div>
              <div style={textStyleGreen}>Rooftop</div>
              <div style={textStyleGreen}>Parking</div>
              <div style={textStyleGreen}>Pool</div>
            <h2 style={{textAlign: 'center', fontFamily: 'Georgia'}}>Website</h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia'}}>To learn more, visit the <a href="https://larkaustin.com/" target="_blank" rel="noopener noreferrer">Lark Website</a>
            </p>
          </div>
        );
      case 'Ion Austin':
        return (
          <div>Hi Ion!</div>
        );
      case 'Inspire on 22nd':
        return (
          <div>Hi Inspire!</div>
        );
      case '2400 Nueces':
        return (
          <div>Hi 2400 Nueces!</div>
        );
      default:
        return '';
    }
  };

  return (
    <div style={{ display: 'flex'}}>
      <div style={{ flex: 1, padding: '20px'}}>
        <select style={{ padding: '5px', fontSize: '15px', textAlign: 'center', paddingRight: '150px'}} className="dropdown" value={selectedOption1} onChange={handleChange1}>
          <option value="[Select Option]">[Select Option]</option>
          <option value="Moontower">Moontower</option>
          <option value="26 West">26 West</option>
          <option value="Lark Austin">Lark Austin</option>
          <option value="Ion Austin">Ion Austin</option>
          <option value="Inspire on 22nd">Inspire on 22nd</option>
          <option value="2400 Nueces">2400 Nueces</option>
        </select>
        <div className="info">{getInfo(selectedOption1)}</div>
      </div>
      <div style={{ flex: 1, padding: '20px', alignItems: 'center'}}>
        <select style={{ padding: '5px', fontSize: '15px', textAlign: 'center', paddingRight: '150px'}} className="dropdown" value={selectedOption2} onChange={handleChange2}>
          <option value="[Select Option]">[Select Option]</option>
          <option value="Moontower">Moontower</option>
          <option value="26 West">26 West</option>
          <option value="Lark Austin">Lark Austin</option>
          <option value="Ion Austin">Ion Austin</option>
          <option value="Inspire on 22nd">Inspire on 22nd</option>
          <option value="2400 Nueces">2400 Nueces</option>
        </select>
        <div className="info">{getInfo(selectedOption2)}</div>
      </div>
    </div>
  );
}

export default Compare;
