/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import dataView from '../pages/dataview';
import { dateFormatted, getDay } from './convertDate';
// import { dataViewListeners } from '../evListeners';

function tdIcons(fileName) {
  try {
    const svgContent = require(
      `../../assets/icons/td-icons/${fileName}.svg`,
    ).default;
    return svgContent;
  } catch (error) {
    console.error('Failed to load SVG:', error);
    return null;
  }
}

function weatherIcon(icon) {
  try {
    const svgContent = require(
      `../../assets/icons/WeatherIcons/${icon}.svg`,
    ).default;
    return svgContent;
  } catch (error) {
    console.error('Failed to load SVG:', error);
    return null;
  }
}

function weeklyInfo(data) {
  // data.pop();
  data.forEach((element, index) => {
    const foreDay = document
      .getElementById(`df-in${index + 1}`)
      .querySelector('.df-subDay');
    foreDay.textContent = getDay(element.date);
    const foreDate = document
      .getElementById(`df-in${index + 1}`)
      .querySelector('.df-subDate');
    foreDate.textContent = dateFormatted(element.date);
    const foreIcon = document
      .getElementById(`df-in${index + 1}`)
      .querySelector('.df-subIcon');
    foreIcon.innerHTML = weatherIcon(element.icon);
    const foreHi = document
      .getElementById(`df-in${index + 1}`)
      .querySelector('.dt-hi');
    foreHi.textContent = `${element.maxTemp} °C /`;
    const foreLo = document
      .getElementById(`df-in${index + 1}`)
      .querySelector('.dt-lo');
    foreLo.textContent = ` ${element.minTemp} °C`;
    console.log(`${index} done`);
  });
}

export default function renderData(today, forecast) {
  dataView();
  // dataViewListeners();
  console.log(today);
  console.log(forecast);

  // summary
  const locat = document.querySelector('.ld-loc');
  locat.textContent = today.location;
  const date = document.querySelector('.ld-date');
  date.textContent = dateFormatted(today.date);

  const summary = document.querySelector('.dp-summary');
  summary.style.backgroundImage = 'url()';

  const icon = document.querySelector('.mf-icon');
  icon.innerHTML = weatherIcon(today.icon);
  const temp = document.querySelector('.mf-temp');
  temp.textContent = `${today.temp} °C`;
  const cond = document.querySelector('.mf-cond');
  cond.textContent = today.conditions;

  const feelVal = document.querySelector('.fl-content .ct-Detail');
  feelVal.textContent = `${today.feelsLike} °C`;
  const precipVal = document.querySelector('.pp-content .ct-Detail');
  precipVal.textContent = `${today.precipProb}%`;

  // breakdown - today
  const desc = document.getElementById('td-in1').querySelector('.td-subDetail');
  desc.textContent = today.info;

  const maxTempTitle = document
    .getElementById('td-in2')
    .querySelector('.td-subTitle');
  maxTempTitle.textContent = 'Highest Temperature';
  const maxTempIcon = document
    .getElementById('td-in2')
    .querySelector('.td-subIcon');
  maxTempIcon.innerHTML = tdIcons('maxTemp');
  const maxTempDetail = document
    .getElementById('td-in2')
    .querySelector('.td-subDetail');
  maxTempDetail.textContent = `${today.maxTemp} °C`;

  const minTempTitle = document
    .getElementById('td-in3')
    .querySelector('.td-subTitle');
  minTempTitle.textContent = 'Lowest Temperature';
  const minTempIcon = document
    .getElementById('td-in3')
    .querySelector('.td-subIcon');
  minTempIcon.innerHTML = tdIcons('minTemp');
  const minTempDetail = document
    .getElementById('td-in3')
    .querySelector('.td-subDetail');
  minTempDetail.textContent = `${today.minTemp} °C`;

  const humidTitle = document
    .getElementById('td-in4')
    .querySelector('.td-subTitle');
  humidTitle.textContent = 'Humidity';
  const humidIcon = document
    .getElementById('td-in4')
    .querySelector('.td-subIcon');
  humidIcon.innerHTML = tdIcons('humidity');
  const humidDetail = document
    .getElementById('td-in4')
    .querySelector('.td-subDetail');
  humidDetail.textContent = `${today.humidity}%`;

  const visibTitle = document
    .getElementById('td-in5')
    .querySelector('.td-subTitle');
  visibTitle.textContent = 'Visibility';
  const visibIcon = document
    .getElementById('td-in5')
    .querySelector('.td-subIcon');
  visibIcon.innerHTML = tdIcons('visib');
  const visibDetail = document
    .getElementById('td-in5')
    .querySelector('.td-subDetail');
  visibDetail.textContent = `${today.visibility} km`;

  const sunriseTitle = document
    .getElementById('td-in6')
    .querySelector('.td-subTitle');
  sunriseTitle.textContent = 'Sunrise';
  const sunriseIcon = document
    .getElementById('td-in6')
    .querySelector('.td-subIcon');
  sunriseIcon.innerHTML = tdIcons('sunrise');
  const sunriseDetail = document
    .getElementById('td-in6')
    .querySelector('.td-subDetail');
  sunriseDetail.textContent = `${today.sunrise}`;

  const sunsetTitle = document
    .getElementById('td-in7')
    .querySelector('.td-subTitle');
  sunsetTitle.textContent = 'Sunset';
  const sunsetIcon = document
    .getElementById('td-in7')
    .querySelector('.td-subIcon');
  sunsetIcon.innerHTML = tdIcons('sunset');
  const sunsetDetail = document
    .getElementById('td-in7')
    .querySelector('.td-subDetail');
  sunsetDetail.textContent = `${today.sunset}`;

  const uvindexTitle = document
    .getElementById('td-in8')
    .querySelector('.td-subTitle');
  uvindexTitle.textContent = 'UV Index';
  const uvindexIcon = document
    .getElementById('td-in8')
    .querySelector('.td-subIcon');
  uvindexIcon.innerHTML = tdIcons('uvindex');
  const uvindexDetail = document
    .getElementById('td-in8')
    .querySelector('.td-subDetail');
  uvindexDetail.textContent = `${today.uvIndex}`;

  const windTitle = document
    .getElementById('td-in9')
    .querySelector('.td-subTitle');
  windTitle.textContent = 'Wind Speed';
  const windIcon = document
    .getElementById('td-in9')
    .querySelector('.td-subIcon');
  windIcon.innerHTML = tdIcons('windspeed');
  const windDetail = document
    .getElementById('td-in9')
    .querySelector('.td-subDetail');
  windDetail.textContent = `${today.windSpeed} km/h`;

  // week's forecast
  weeklyInfo(forecast);
}
