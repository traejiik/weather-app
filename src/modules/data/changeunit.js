import renderData from './renderData';

export default function changeUnit(today, weekForecast) {
  if (today.unit === 'metric') {
    today.convertToImperial();
    weekForecast.forEach((item) => item.convertToImperial());
  } else if (today.unit === 'imperial') {
    today.convertToMetric();
    weekForecast.forEach((item) => item.convertToMetric());
  }
  renderData(today, weekForecast);

  return {
    today,
    weekForecast,
  };
}
