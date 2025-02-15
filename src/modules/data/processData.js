import renderData from './renderData';

class WeatherToday {
  constructor(
    locat,
    date,
    icon,
    temp,
    cond,
    feelslike,
    precipprob,
    desc,
    tempmax,
    tempmin,
    humid,
    visib,
    sunrise,
    sunset,
    uvindex,
    windspeed,
  ) {
    this.location = locat;
    this.date = date;
    this.icon = icon;
    this.temp = temp;
    this.conditions = cond;
    this.feelsLike = feelslike;
    this.precipProb = precipprob;
    this.info = desc;
    this.maxTemp = tempmax;
    this.minTemp = tempmin;
    this.humidity = humid;
    this.visibility = visib;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.uvIndex = uvindex;
    this.windSpeed = windspeed;
    this.unit = 'metric';
  }

  convertToFahrenheit() {
    this.temp = this.temp * 1.8 + 32;
    this.maxTemp = this.maxTemp * 1.8 + 32;
    this.minTemp = this.minTemp * 1.8 + 32;
    this.feelsLike = this.feelsLike * 1.8 + 32;
    this.unit = 'imperial';
  }

  convertToCelsius() {
    this.temp = (this.temp - 32) / 1.8;
    this.maxTemp = (this.maxTemp - 32) / 1.8;
    this.minTemp = (this.minTemp - 32) / 1.8;
    this.feelsLike = (this.feelsLike - 32) / 1.8;
    this.unit = 'metric';
  }
}

class WeatherWeek {
  constructor(date, icon, tempmax, tempmin) {
    this.date = date;
    this.icon = icon;
    this.maxTemp = tempmax;
    this.minTemp = tempmin;
    this.unit = 'metric';
  }

  convertToFahrenheit() {
    this.maxTemp = this.maxTemp * 1.8 + 32;
    this.minTemp = this.minTemp * 1.8 + 32;
    this.unit = 'imperial';
  }

  convertToCelsius() {
    this.maxTemp = (this.maxTemp - 32) / 1.8;
    this.minTemp = (this.minTemp - 32) / 1.8;
    this.unit = 'metric';
  }
}

export default function processData(data) {
  const weekForecast = [];
  const data0 = data.days[0];
  const dataList = data.days;
  dataList.splice(0, 1);

  const today = new WeatherToday(
    data.resolvedAddress,
    data0.datetime,
    data0.icon,
    data0.temp,
    data0.conditions,
    data0.feelslike,
    data0.precipprob,
    data0.description,
    data0.tempmax,
    data0.tempmin,
    data0.humidity,
    data0.visibility,
    data0.sunrise,
    data0.sunset,
    data0.uvindex,
    data0.windspeed,
  );

  dataList.forEach((item) => {
    const day = new WeatherWeek(
      item.datetime,
      item.icon,
      item.tempmax,
      item.tempmin,
    );
    weekForecast.push(day);
  });

  renderData(today, weekForecast);
}
