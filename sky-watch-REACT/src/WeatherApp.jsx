import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WanderLand",
        feelsLike: "24.84",
        temp: "25.05",
        tempMin: "23.00",
        tempMax: "27.00",
        humidity: "60",
        weather: "Clear"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
