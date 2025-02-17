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
  const { today, weekForecast } = data;
  const hdBtnCtn = document.querySelector('.hd-btnctn');
  let activeUnit = 'celsius'; // Track the active unit

  function updateClasses() {
    const celsius = document.querySelector('.celsius');
    const fahrenheit = document.querySelector('.fahrenheit');

    celsius.classList.toggle('active-btn', activeUnit === 'celsius');
    fahrenheit.classList.toggle('active-btn', activeUnit === 'fahrenheit');
  }

  function handleUnitChange(unit) {
    activeUnit = unit;
    const data1 = changeUnit(today, weekForecast);
    // eslint-disable-next-line no-use-before-define
    dataViewListeners(data1);
    updateClasses();
  }

  hdBtnCtn.addEventListener('click', (event) => {
    if (event.target.classList.contains('celsius')) {
      handleUnitChange('celsius');
    } else if (event.target.classList.contains('fahrenheit')) {
      handleUnitChange('fahrenheit');
    }
  });

  updateClasses();
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
