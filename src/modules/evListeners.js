import { getLocData, coordToCity } from './fetchAPI';

function useLoc() {
  const geoBtn = document.querySelector('.mn-geoLoc');

  geoBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(coordToCity);
  });
}

function searchCity() {
  const inp = document.querySelector('#city-search');
  const searchBtn = document.querySelector('.mn-searchLoc');

  inp.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inp.value === '') {
        alert('Enter a city');
      } else {
        getLocData(inp.value);
      }
    }
  });
  searchBtn.addEventListener('click', () => {
    if (inp.value === '') {
      alert('Enter a city');
    } else {
      getLocData(inp.value);
    }
  });
}

export { useLoc, searchCity };
