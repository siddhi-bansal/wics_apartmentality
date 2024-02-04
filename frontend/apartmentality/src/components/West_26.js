import React from 'react';
import './West_26.css'; // Import the CSS file
import './TableStyle.css';

function West_26({ }) {
    return (
        <div className="west-26-container">
            <h1>26 West</h1>
            <img
                src="https://www.americancampus.com/getmedia/8155d211-eda4-4d42-8b31-0637299081af/687_02_Gallery_730x547.jpg"  // Replace with the actual URL of your image
                style={{ width: '100%', height: 'auto' }} // Optional: Set styles for the image
            />
            <h2>Floor Plans & Pricing</h2>
            <table>
                <thead>
                    <tr>
                        <th># Beds</th>
                        <th># Bath</th>
                        <th>Version</th>
                        <th>Pricing</th>
                        {/* Add more header cells as needed */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>A</td>
                        <td>$2,189</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>B</td>
                        <td>$2,139</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>SMART</td>
                        <td>$1,527</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>A</td>
                        <td>$1,494</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>1</td>
                        <td>B</td>
                        <td>$1,484</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>C</td>
                        <td>$1,584</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>Corner A</td>
                        <td>$1,619</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>Corner B</td>
                        <td>$1,649</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>D</td>
                        <td>$1,639</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>with Study</td>
                        <td>$1,594</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>2</td>
                        <td>-</td>
                        <td>$1,274</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>4</td>
                        <td>A</td>
                        <td>$1,349-$1,364</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>4</td>
                        <td>B</td>
                        <td>$1,349-$1,364</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
            <h2>Amenities</h2>
            <p>Swimming Pool</p>
            <p>24-hour Fitness Center</p>
            <p>Rooftop Basketball Court</p>
            <p>Bark Park</p>
            <p>Outdoor Pavilions</p>
            <p>Outdoor Kithcen with BBQ Grills</p>
            <p>Parking</p>
            <p>Bike Storage</p>
            <p>Wi-Fi</p>
            <p>Free Printing</p>
            <h2>Pet Friendly?</h2>
            <p>Yes</p>
            <h2>Proximity to Campus</h2>
            <img
                src="./map_work.png"  // Replace with the actual URL of your image
            />
            <p>26 West is 1 mile from the UT Austin campus and a 22 minute walk.</p>
            <h2>Reviews</h2>
            <p>Management was terrific, the pool was one of the nicer ones in west campus,</p>
            <p>and the gym/Amazon Locker was open 24 hours. Although these are major positives,</p> 
            <p>the floors were covered in a thick layer of dust I've never been able to wash off.</p>
            <h2>Website</h2>
            <p>Visit the website: </p>
            <a href="https://www.americancampus.com/student-apartments/tx/austin/26-west" target="_blank" rel="noopener noreferrer"> 26 West Website
      </a>
            <h2>Based on Your Profile: </h2>
            <p>75% Match</p>

        </div>
    );
}

export default West_26;