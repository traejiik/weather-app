export default async function getWeatherData() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/debrecen?key=BT5LNKF4MUWA6HN47Q7UYCXUN`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (err) {
    console.log('failed');
  }
}