import { TEMPRATURE_UNITS } from "./temprature.util";


export const formatForecast = (response, tempratureUnit = TEMPRATURE_UNITS.CELSIUS) => {
  const forecasts =
    response &&
    response.forecast &&
    response.forecast.forecastday &&
    response.forecast.forecastday.length &&
    response.forecast.forecastday.slice(1);

  if (forecasts && forecasts.length) {
    return forecasts.map(forecast => {
      const date = new Date(forecast.date);
      return {
        day: date.getDate(),
        year: date.getFullYear(),
        temprature: selectTempUnitBasedValue(
          forecast.day.avgtemp_c,
          forecast.day.avgtemp_f,
          tempratureUnit
        ),
        tempratureUnit: selectTempUnitBasedValue("C", "F", tempratureUnit)
      };
    });
  } else {
    return [];
  }
};

export const formatCurrentWeather = (response, tempratureUnit = TEMPRATURE_UNITS.CELSIUS) => {
  const currentWeather = response.current;
  const currentDayForecast = response.forecast.forecastday[0].day;
  return {
    humidity: currentWeather.humidity,
    visiblity: currentWeather.vis_km,
    temprature: selectTempUnitBasedValue(
      currentWeather.temp_c,
      currentWeather.temp_f,
      tempratureUnit
    ),
    tempratureUnit: selectTempUnitBasedValue("C", "F", tempratureUnit),
    minTemprature: selectTempUnitBasedValue(
      currentDayForecast.mintemp_c,
      currentDayForecast.mintemp_f,
      tempratureUnit
    ),
    maxTemprature: selectTempUnitBasedValue(
      currentDayForecast.maxtemp_c,
      currentDayForecast.maxtemp_f,
      tempratureUnit
    ),
    location: `${response.location.name} ${response.location.country}`,
    condition: currentWeather.condition.text,
    icon: `http:${currentWeather.condition.icon}`
  };
};

const selectTempUnitBasedValue = (
  celsiusValue,
  fahreniteValue,
  currentUnit
) => {
  return currentUnit === TEMPRATURE_UNITS.CELSIUS
    ? celsiusValue
    : fahreniteValue;
};
