// import TopButtons from "./Components/TopButtons";
// import Inputs from "./Components/Inputs";
// import TimeAndLocation from "./Components/TimeAndLocation";
// import TemperatureDetails from "./Components/TemperatureDetails";
// import Forecast from "./Components/Forecast";
import getFormatedData from "./Services/weatherApi";
import { useEffect, useState } from "react";
import { Suspense, lazy } from "react";

const TopButtons = lazy(() => import("./Components/TopButtons"));
const Inputs = lazy(() => import("./Components/Inputs"));
const TimeAndLocation = lazy(() => import("./Components/TimeAndLocation"));
const TemperatureDetails = lazy(() => import("./Components/TemperatureDetails"));
const Forecast = lazy(() => import("./Components/Forecast"));

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

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };


  return (
    <>
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <Suspense fallback={<div>Loading Buttons...</div>}>
          <TopButtons setQuery={setQuery} />
        </Suspense>

        <Suspense fallback={<div>Loading Input...</div>}>
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        </Suspense>

        {weather && (
          <div>
            <Suspense fallback={<div>Loading Loaction...</div>}>
              <TimeAndLocation weather={weather} />
            </Suspense>

            <Suspense fallback={<div>Loading Temperature...</div>}>
              <TemperatureDetails weather={weather} />
            </Suspense>

            <Suspense fallback={<div>Loading Forecast</div>}>
              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="daily forecast" items={weather.daily} />
            </Suspense>
          </div>
        )}

      </div>

    </>
  );
}

export default App;
