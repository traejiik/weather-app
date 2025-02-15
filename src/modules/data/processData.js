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
    this.unit = 'C';
  }

  convertToFahrenheit() {
    this.temp = this.temp * 1.8 + 32;
    this.maxTemp = this.maxTemp * 1.8 + 32;
    this.minTemp = this.minTemp * 1.8 + 32;
    this.feelsLike = this.feelsLike * 1.8 + 32;
    this.unit = 'F';
  }

  convertToCelsius() {
    this.temp = (this.temp - 32) / 1.8;
    this.maxTemp = (this.maxTemp - 32) / 1.8;
    this.minTemp = (this.minTemp - 32) / 1.8;
    this.feelsLike = (this.feelsLike - 32) / 1.8;
    this.unit = 'C';
  }
}

class WeatherWeek {
  constructor(date, icon, tempmax, tempmin) {
    this.date = date;
    this.icon = icon;
    this.maxTemp = tempmax;
    this.minTemp = tempmin;
    this.unit = 'C';
  }

  convertToFahrenheit() {
    this.maxTemp = this.maxTemp * 1.8 + 32;
    this.minTemp = this.minTemp * 1.8 + 32;
    this.unit = 'F';
  }

  convertToCelsius() {
    this.maxTemp = (this.maxTemp - 32) / 1.8;
    this.minTemp = (this.minTemp - 32) / 1.8;
    this.unit = 'C';
  }
}
