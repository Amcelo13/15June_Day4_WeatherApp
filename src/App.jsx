import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { useState, useEffect } from "react";
import getApi from "./services/getApi";

import Sun from "../src/assets/Sun.svg";
import Moon from "../src/assets/White_Moon.svg";
import Rain from "./assets/Rain.svg";
import Dust from "../src/assets/Dust.svg";
import Clouds from "./assets/Clouds.svg";

import Sunny from "./assets/Sunny.jpg";
import Dusty from "./assets/Dusty.jpg";
import Cloudy from "./assets/Cloudy.jpg";
import Rainy from "./assets/Rainy.jpg";
import Night from "./assets/Night.jpg";

function App() {
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [day, setday] = useState("");
  const [ico, setIco] = useState(null);
  const [searchCity, setSearchCity] = useState("chandigarh");
  const [weather_nature, setweather_nature] = useState("");
  const [bf, setbf] = useState(Sunny);

  // API Calling
  useEffect(() => {
    const getData = async () => {
      const response = await getApi(searchCity);
      // console.log(response);
      setData(response);

      setTemp(parseInt(response.main.temp) - 273);
      setCity(response.name);
      setCountry(response.sys.country);
      setweather_nature(response.weather[0].main);
      const d = new Date();
      let hour = d.getHours();
      if (response.weather[0].main === "Clouds" && hour <= 20) {
        setIco(Clouds);
        setbf(Cloudy);
      }
      if (response.weather[0].main === "Rain" && hour <= 20) {
        setIco(Rain);
        setbf(Rainy);
      }
      if (response.weather[0].main === "Clear" && hour <= 20) {
        setIco(Sun);
        setbf(Sunny);
      }
      if (response.weather[0].main === "Dust" && hour <= 20) {
        setIco(Dust);
        setbf(Dusty);
      }

      if (response.weather[0].main === "Clear" && hour >= 20) {
        setIco(Moon);
        setbf(Night);
      }
    };
    getData();

    const d = new Date();
    const n = d.getDay();

    switch (n) {
      case 0:
        setday("Sunday");
        break;
      case 1:
        setday("Monday");
        break;
      case 2:
        setday("Tuesday");
        break;
      case 3:
        setday("Wednesday");
        break;
      case 4:
        setday("Thursday");
        break;
      case 5:
        setday("Friday");
        break;
      case 6:
        setday("Saturday");
        break;
      default:
        setday(null);
        break;
    }
  }, [searchCity]);

  // console.log(data.temp);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                weather_nature={weather_nature}
                city={city}
                bf={bf}
                country={country}
                setSearchCity={setSearchCity}
                temp={temp}
                day={day}
                ico={ico}
                data={data}
                setData={setData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
