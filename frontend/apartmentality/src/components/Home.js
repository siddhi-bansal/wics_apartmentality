import React from 'react';
import { Link } from "react-router-dom";
import Recommendation from './Recommendation.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Home.css';


export function Home() {
    const items = [
        {
            id: 1,
            src: 'https://moontoweratx.com/wp-content/uploads/2023/11/why-1.jpg',
            link: "link here",
            name: "Moontower",
            starting: "$1495"

        },
        {
            id: 2,
            src: 'https://www.americancampus.com/getmedia/8155d211-eda4-4d42-8b31-0637299081af/687_02_Gallery_730x547.jpg',
            link: 'link here',
            name: "26 West",
            starting: "$1274"
        },
        {
            id: 3,
            src: 'https://r-o.com/uploads/portfolio/1_947591442_2.JPG',
            link: 'link here',
            name: "Lark Austin",
            starting: "$1375"
        },
        {
            id: 4,
            src: 'https://ion-austin.com/wp-content/uploads/sites/6/2020/02/HomepageExterior1200.jpg',
            link: 'link here',
            name: "Ion Austin",
            starting: "$1359"
        },
        {
            id: 5,
            src: 'https://images1.apartments.com/i2/Nn99r2sviOTrmufGlDsPUMAnzoU3I-EpU-8pGNHiq8Y/111/inspire-on-22nd-austin-tx-building-photo.jpg',
            link: 'link here',
            name: "Inspire on 22nd",
            starting: "$1375"
        },
        {
            id: 6,
            src: 'https://housing.utexas.edu/sites/default/files/styles/uhd_1200w_x_800h_3_2/public/2021-08/2400%20Nueces%20Ap_Galleries-1.jpg?itok=N67n1qku',
            link: 'link here',
            name: "2400 Nueces",
            starting: "$1104"
        },
    ];
    return (
        <>
            <div name=''>
                <div>
                    <div className='web'>
                        {items.map(({ id, src, link, name, starting }) => (
                            <div key={id} className="card-box">
                                <div className="card-box">
                                    <button 
                                        onClick={() => window.open(link, '_self')}
                                        className='card'>
                                    <img className="card-img" src={src}/>
                                    <div class="card-text">{name}</div>
                                    <div class="card-text-pricing">Starting at {starting}</div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;