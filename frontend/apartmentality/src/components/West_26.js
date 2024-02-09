import React from 'react';
import './West_26.css'; // Import the CSS file
import './TableStyle.css';

function West_26({ }) {
    const imageSize = {
        width: '550px', // Set your desired width
        height: '413px', // Set your desired height
    };
    return (
        <div className="west-26-container">
            <h1 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>26 West</h1>
            <img
                src="https://www.americancampus.com/getmedia/8155d211-eda4-4d42-8b31-0637299081af/687_02_Gallery_730x547.jpg"  // Replace with the actual URL of your image
                style={{ width: '100%', height: 'auto' }} // Optional: Set styles for the image
            />
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Floor Plans and Pricing</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center', fontFamily: 'Georgia' }}># Bed</th>
                        <th style={{ textAlign: 'center', fontFamily: 'Georgia' }}># Bed</th>
                        <th style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Version</th>
                        <th style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Pricing</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>A</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$2189</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>B</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}> $2139</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>SMART</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1527</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>A</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1494</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>1</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>B</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1484</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>C</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1584</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Corner A</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1619</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Corner B</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1649</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>D</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1639</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>with Study</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1594</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>4</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>2</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>-</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1274</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>4</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>4</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>A</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1349-$1364</td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>4</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>4</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>B</td>
                        <td style={{ textAlign: 'center', fontFamily: 'Georgia' }}>$1349-$1364</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Amenities</h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Swimming Pool</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>24-hour Fitness Center</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Rooftop Basketball Court</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Bark Park</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Outdoor Pavilions</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Outdoor Kitchen with BBQ Grills</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Parking</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Bike Storage</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Wi-Fi</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Free Printing</p>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Pet Friendly?</h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Yes</p>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Proximity to Campus</h2>
            <img
                src="./map_work.png"  // Replace with the actual URL of your image
                style={imageSize}
            />
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>26 West is 0.5 mile from the UT Austin campus and a 12 minute walk.</p>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Reviews</h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Management was terrific, the pool was one of the nicer ones in west campus,</p>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>and the gym/Amazon Locker was open 24 hours. Although these are major positives,</p> 
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>the floors were covered in a thick layer of dust I've never been able to wash off.</p>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Website</h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Visit the website: </p>
            <a href="https://www.americancampus.com/student-apartments/tx/austin/26-west" target="_blank" rel="noopener noreferrer"> 26 West Website
      </a>
            <h2 style={{ textAlign: 'center', fontFamily: 'Georgia' }}>Based on Your Profile: </h2>
            <p style={{ textAlign: 'center', fontFamily: 'Georgia' }}>75% Match</p>

        </div>
    );
}

export default West_26;