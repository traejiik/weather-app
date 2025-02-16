import { getLocData, coordToCity } from './fetchAPI';
import alertBox from './pages/alertBox';
import changeUnit from './data/changeunit';

// home page listeners
function useLoc() {
  const geoBtn = document.querySelector('.mn-geoLoc');

  geoBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(coordToCity);
  });
}

function searchCity() {
  const inp = document.querySelector('#city-search');
  const searchBtn = document.querySelector('.mn-searchLoc');

  inp.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inp.value === '') {
        alertBox('please enter a city');
      } else {
        getLocData(inp.value);
      }
    }
  });
  searchBtn.addEventListener('click', () => {
    if (inp.value === '') {
      alertBox('please enter a city');
    } else {
      getLocData(inp.value);
    }
  });
}

// dataView listeners
function dataSearchCity() {
  const inp = document.querySelector('#sb-search');
  const searchBtn = document.querySelector('.sb-searchBtn');

  inp.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inp.value === '') {
        alertBox('please enter a city');
      } else {
        getLocData(inp.value);
      }
    }
  });
  searchBtn.addEventListener('click', () => {
    if (inp.value === '') {
      alertBox('please enter a city');
    } else {
      getLocData(inp.value);
    }
  });
}

function dataUseLoc() {
  const geoBtn = document.querySelector('.sb-geoBtn');

  geoBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(coordToCity);
  });
}

function unitSwitch(data) {
  const { today, forecast } = data;
  const celsius = document.querySelector('.celsius');
  const fahrenheit = document.querySelector('.fahrenheit');

  celsius.addEventListener('click', () => {
    fahrenheit.classList.remove('active-btn');
    celsius.classList.add('active-btn');
    changeUnit(today, forecast);
  });

  fahrenheit.addEventListener('click', () => {
    celsius.classList.remove('active-btn');
    fahrenheit.classList.add('active-btn');
    changeUnit(today, forecast);
  });
}

// helper functions
function homeListeners() {
  useLoc();
  searchCity();
}

function dataViewListeners(data) {
  dataSearchCity();
  dataUseLoc();
  unitSwitch(data);
}

export { homeListeners, dataViewListeners };
