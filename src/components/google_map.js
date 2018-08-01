import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        console.log('this', this);
        this.map = new window.google.maps.Map(this.refs.map, {
            zoom: 10,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });

        this.marker = new window.google.maps.Marker({
            map: this.map,
            draggable: false,
            position: new window.google.maps.LatLng(this.props.lat, this.props.lon),
            icon: new window.google.maps.MarkerImage(
                'img/city.png',
                new window.google.maps.Size(5, 5),
                new window.google.maps.Point(0, 0),
                new window.google.maps.Point(2.5, 2.5),
                new window.google.maps.Size(5, 5))
        });

    }

    render() {
        return <div ref="map"/>;
    }

}

export default GoogleMap;