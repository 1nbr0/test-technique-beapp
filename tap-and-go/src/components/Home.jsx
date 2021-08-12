import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="home-section">
            <div className="home-banner">
                <h1 className="home-title">Nouveau dans votre ville ?</h1>
                <h3 className="home-quote"><span className="tag-span">TapAndGo</span> facilite vos déplacements du quotidien.</h3>
                <div className="home-btn">
                    <Link to="/map" className="btn btn-body" type="button">Carte des stations</Link>
                </div>
            </div>
        </section>
    );
}

export default Home;