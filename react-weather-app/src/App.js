import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TemperatureDetails from "./Components/TemperatureDetails";
import Forecast from "./Components/Forecast";
import getFormatedData from "./Services/weatherApi";
import { useEffect, useState } from "react";

function App() {


  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormatedData({ ...query, units }).then(data => {
        setWeather(data);
      });
    }

    fetchWeather();
  }, [query, units])



  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}

      </div>

    </>
  );
}

export default App;
