import React from 'react';
import '../styles/home.css';
import firstImg from '../assets/img/bike-nantes.jpg';
import secondImg from '../assets/img/lyon.jpg';
import thirdImg from '../assets/img/nantes.jpg';
import fourthImg from '../assets/img/marseille.jpg';

function Home() {
    return (
        <section className="home-section">
            <div className="home-banner">
                <h1 className="home-title">Nouveau dans votre ville ?</h1>
                <h3 className="home-quote"><span className="tag-span">TapAndGo</span> facilite vos déplacements du quotidien.</h3>
            </div>
        </section>
    );
}

export default Home;