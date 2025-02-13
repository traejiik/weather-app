async function getLocData(location) {
  const apiKey = 'BT5LNKF4MUWA6HN47Q7UYCXUN';
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (err) {
    console.log(err);
  }
}

async function coordToCity(position) {
  console.log(position);
  const { latitude, longitude } = position.coords;
  const apiKey = '436c27761b114d85bf78a57ce2eef1dd';
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    if (data.results.length > 0) {
      const location = data.results[0].components;
      const city =
        location.city ||
        location.town ||
        location.village ||
        'Unknown Location';
      console.log(`City: ${city}`);
      getLocData(city);
    } else {
      console.log('No location data found');
    }
  } catch (error) {
    console.error('Error fetching location data:', error);
  }
}

export { getLocData, coordToCity };
