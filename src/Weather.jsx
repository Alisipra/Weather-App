import React, { useState } from "react";
import "./weather.css";
export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState();
  let [isloading, setIsloading] = useState(false);
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b8a9869f45c3570cd76965e9a11618a&units=metric`;
  const getWeather = async (event) => {
    event.preventDefault();
    setIsloading(true);
    let data = await fetch(api);
    let res = await data.json();
    setIsloading(false);
    if (res.cod === "404") {
      setWeather(undefined);
    } else {
      setWeather(res);
    }
  };

  return (
    <>
      <h1>Weather App</h1>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Get Weather</button>
      </form>

      {weather !== undefined ? (
        <div className="box">
          <img
            src="https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif"
            alt=""
            width={100}
            className={`${isloading ? "loadingShow" : "loadingHide"}`}
          />
          <h3>
            <span>City: </span>
            {weather.name}
          </h3>
          <h3>
            <span>Temp: </span>
            {weather.main.temp}&deg;C
          </h3>
          <h3>
            <span>Humidity: </span>
            {weather.main.humidity} g/km
          </h3>
          <h3>
            <span>wind: </span>
            {weather.wind.speed} Km/h
          </h3>
        </div>
      ) : (
        "Data Not found..."
      )}
    </>
  );
}
