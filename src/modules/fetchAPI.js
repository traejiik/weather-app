import getDate from './data/getDate';
import processData from './data/processData';
import { dataViewListeners } from './evListeners';
import alertBox from './pages/alertBox';

async function getLocData(location) {
  const today = getDate();
  const week = getDate(7);
  const apiKey = 'BT5LNKF4MUWA6HN47Q7UYCXUN';
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${today}/${week}?key=${apiKey}&include=days&elements=conditions,datetime,visibility,description,feelslike,humidity,uvindex,windspeed,precip,precipprob,feelslikemax,feelslikemin,icon,sunrise,sunset,tempmax,tempmin,temp&unitGroup=metric`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const weatherData = await response.json();
    const processed = processData(weatherData);
    dataViewListeners(processed);
  } catch (err) {
    alertBox(err);
  }
}

async function coordToCity(position) {
  const { latitude, longitude } = position.coords;
  const apiKey = '436c27761b114d85bf78a57ce2eef1dd';
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();

    if (data.results.length > 0) {
      const location = data.results[0].components;
      const city =
        location.city ||
        location.town ||
        location.village ||
        'Unknown Location';
      getLocData(city);
    } else {
      alertBox('No location data found');
    }
  } catch (error) {
    alertBox('Error fetching location data:', error);
  }
}

export { getLocData, coordToCity };
