import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.88,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateWeather = (weather) => {
    setWeatherInfo(weather);
  };

  return (
    <div>
      <h1>WeatherApp</h1>
      <SearchBox updateWeather={updateWeather} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
