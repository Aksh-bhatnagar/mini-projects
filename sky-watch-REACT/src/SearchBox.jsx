import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
    const API_KEY = "191a59dbc6783b75b8935f296f6f6e2d";

    let getWeatherInfo = async () => {
        try {
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          let jsonResponse = await response.json();
          let result = {
              city: city,
              temp: jsonResponse.main.temp,
              tempMin: jsonResponse.main.temp_min,
              tempMax: jsonResponse.main.temp_max,
              humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather: jsonResponse.weather[0].description
          }
          console.log(result);
          return result;
        } catch (err) {
          throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
          evt.preventDefault();
        console.log("Searching weather for:", city);
        setCity(""); // Clear the input after submission
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err) {
          setError(true);
        }
    }

    return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField label="City Name" variant="outlined" id="city" required value={city} onChange={handleChange} />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{ color: 'red' }} className="error">No such place found.</p>}
      </form>
    </div>
  );
}
