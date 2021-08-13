import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

// This component is use to get the google map and display it

const style = {
    width: '100%',
    height: '90vh'
}

const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
}

export class MapContainer extends Component {
    render() {
        return (
        <Map
            containerStyle={containerStyle}
            google={this.props.google}
            style={style}
            initialCenter={{
                lat: 47.218371,
                lng: -1.553621,
            }}
            zoom={12}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
        </Map>
        );
    }
    }
    
    export default GoogleApiWrapper({
    apiKey: ('AIzaSyDAEM-UK3AKZFhL9tfnsW8l1uqfWnywJv8')
})(MapContainer)