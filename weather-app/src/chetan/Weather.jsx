import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {
    const { country, lat, lon } = useParams();
    const [currentData, setCurrentData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchCurrentData = async () => {
            try {
                const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=c794508908b44cf992d35958240407&q=${country}&aqi=no&lat=${lat}&lon=${lon}`);
                setCurrentData(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching current weather data: ", error);
            }
        };

        const fetchForecastData = async () => {
            try {
                const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=c794508908b44cf992d35958240407&q=${country}&days=1&aqi=no&alerts=no&aqi=no&lat=${lat}&lon=${lon}`);
                setForecastData(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching forecast data: ", error);
            }
        };

        fetchCurrentData();
        fetchForecastData();
    }, [country, lat, lon]);

    if (!currentData || !forecastData) {
        return <div>Loading...</div>;
    }

    const forecastCards = forecastData.forecast.forecastday.map((day, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '10px' }}>
            <Card.Body>
                <Card.Title>Forecast for {forecastData.location.name} on {day.date}</Card.Title>
                <Card.Text>
                    Max Temp (C): {day.day.maxtemp_c}
                    <br />
                    Min Temp (C): {day.day.mintemp_c}
                    <br />
                    Condition: {day.day.condition.text}
                    <br />
                    Wind (kph): {day.day.maxwind_kph}
                    <br />
                    Humidity: {day.day.avghumidity}
                </Card.Text>
            </Card.Body>
        </Card>
    ));

    return (
        <div>
            <h1>Weather Data</h1>
            <Card style={{ width: '18rem', marginBottom: '10px' }}>
                <Card.Body>
                    <Card.Title>{currentData.location.name}, {currentData.location.region}</Card.Title>
                    <Card.Text>
                        Country: {currentData.location.country}
                        <br />
                        Latitude: {currentData.location.lat}
                        <br />
                        Longitude: {currentData.location.lon}
                        <br />
                        Time Zone: {currentData.location.tz_id}
                        <br />
                        Local Time: {currentData.location.localtime}
                        <br />
                        Temperature (C): {currentData.current.temp_c}
                        <br />
                        Temperature (F): {currentData.current.temp_f}
                        <br />
                        Condition: {currentData.current.condition.text}
                        <br />
                        Wind (kph): {currentData.current.wind_kph}
                        <br />
                        Wind (mph): {currentData.current.wind_mph}
                        <br />
                        Humidity: {currentData.current.humidity}
                        <br />
                        Cloud: {currentData.current.cloud}
                    </Card.Text>
                </Card.Body>
            </Card>
            <h1>Forecast Data</h1>
            {forecastCards}
        </div>
    );
}

export default Weather;
