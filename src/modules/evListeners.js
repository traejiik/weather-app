import { getLocData, coordToCity } from './fetchAPI';
import alertBox from './pages/alertBox';

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

export { useLoc, searchCity };
