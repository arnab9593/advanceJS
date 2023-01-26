const baseUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = '17b09713f5b35c92165ed3d1bc7a6f9e';

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getData = (info, searchParam) => {
    const url = new URL(baseUrl + "/" + info);
    url.search = new URLSearchParams({ ...searchParam, appid: apiKey });
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data);
};

const formatCurrentData = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed
    }

}

const getFormatedData = async (params) => {
    const formatedData = await getData('weather', params).then(formatCurrentData);
    return formatedData;
}

export default getFormatedData;
