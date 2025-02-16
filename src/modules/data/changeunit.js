export default function changeUnit(today, forecast) {
  if (today.unit === 'metric') {
    today.convertToImperial();
    forecast.forEach((item) => {
      item.convertToImperial();
    });
  } else {
    today.convertToMetric();
    forecast.forEach((item) => {
      item.convertToMetricl();
    });
  }
}
