import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        console.log('cityData', cityData);
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp - 273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const winds = cityData.list.map(weather => weather.wind.speed);
        const {lon, lat} = cityData.city.coord;
        return (
            <tr key={name}>

                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                    <div>
                        <span>Lat: {cityData.city.coord.lat}</span><br/>
                        <span>Lng: {cityData.city.coord.lon}</span>
                    </div>
                </td>
                <td><Chart data={temps} color="orange" units="&deg;"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
                <td><Chart data={winds} color="blue" units="km/h"/></td>
            </tr>
        );
    }

    searchValidation = (data) => {
        console.log('data', data);
        if (data[0] !== undefined) {
            return data.map((cityData) => this.renderWeather(cityData));
        }
        return null;

    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    <th>Wind</th>
                </tr>
                </thead>
                <tbody>
                {this.searchValidation(this.props.weather)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);