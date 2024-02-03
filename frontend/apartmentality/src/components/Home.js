import React from 'react';
import { Link } from "react-router-dom";
import Recommendation from './Recommendation.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Home.css';

export function Home() {
    const items = [
        {
            id: 1,
            src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: 'link here',

        },
        {
            id: 2,
            src: 'https://media.licdn.com/dms/image/D5603AQGPvYnnRzqNyg/profile-displayphoto-shrink_800_800/0/1699584590965?e=2147483647&v=beta&t=xsWlJEB_TrmWIoteBJ4tTjfLOoBkRu_l630mYSNkik0',
            link: 'link here',
        },
        {
            id: 3,
            src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: 'link here',
        },
        {
            id: 4,
            src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: 'link here',
        },
        {
            id: 5,
            src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: 'link here',
        },
        {
            id: 5,
            src: 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            link: 'link here',
        },
    ];
    return (
        <>
            <div name=''>
                <div>
                    <div className='container'>
                        {items.map(({ id, src, link }) => (
                            <div key={id} className='test'>
                                <div>
                                    <button
                                        onClick={() => window.open(link, '_blank')}>
                                    <img src={src} alt=''/>
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