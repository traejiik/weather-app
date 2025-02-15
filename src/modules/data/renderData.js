import dataView from '../pages/dataview';

export default function renderData(today, forecast) {
  dataView();
  console.log(today);
  console.log(forecast);

  // summary
  const locat = document.querySelector('.ld-loc');
  locat.textContent = today.location;
  const date = document.querySelector('.ld-date');
  date.textContent = today.datetime;

  const icon = document.querySelector('.mf-icon');
  const temp = document.querySelector('.mf-temp');
  temp.textContent = `${today.temp} °C`;
  const cond = document.querySelector('.mf-cond');
  cond.textContent = today.conditions;

  const feelVal = document.querySelector('.fl-content .ct-Detail');
  feelVal.textContent = `${today.feelsLike} °C`;
  const precipVal = document.querySelector('.pp-content .ct-Detail');
  precipVal.textContent = `${today.precipProb}%`;

  // breakdown - today
}
