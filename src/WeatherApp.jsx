import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Ahmedabad",
    feelsLike: 36.19,
    humidity: 30,
    temp: 36.02,
    tempMax: 36.02,
    tempMin: 36.02,
    weather: "smoke",
  });

  let UpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={UpdateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
