import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <h1>HOME</h1>
            <Link to={'/registration'}>
                <button>Register</button>
            </Link>
        </div>
    )
}

export default Home;
