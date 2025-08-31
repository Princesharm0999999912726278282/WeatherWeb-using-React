import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateWeather }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb3935cb20ccfeb48beb4434d0f0a0bd&units=metric`;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(url);
      let jsonRes = await response.json();
      let result = {
        city: jsonRes.name,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let weather = await getWeatherInfo();
      updateWeather(weather);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          SEARCH
        </Button>
        {error && <p style= {{color: 'red'}}>No city found</p> }
      </form>
    </div>
  );
}
