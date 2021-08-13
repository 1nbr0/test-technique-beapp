import React from 'react';
import GoogleMap from './GoogleMap';
import '../styles/map.css';

function Map() {
    return (
        <div className="map-body">
            <a className="go-to-destineo" href="https://www.destineo.fr/fr/" target="_blank">
                <button className="btn btn-map-body" type="button">Recherche d'itinéraires destinéo</button>
                {/* 
                    I use destineo like bicloo uses because i didn't had the time to thinking about a algorithm to set a travel 
                    It incorporate a feature in my react app even if I don't have algorithm
                */}
            </a>
            <GoogleMap />
        </div>
    );
}

export default Map;