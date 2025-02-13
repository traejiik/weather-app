import retrieveData from './fetchAPI';

function useLoc() {
  const geoBtn = document.querySelector('.mn-geoLoc');

  geoBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(retrieveData);
  });
}

// function searchCity() {
//   const inp = document.querySelector('#city-search');
//   const searchBtn = document.querySelector('.mn-searchLoc');

//   inp.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//       if (inp.value === '') {
//         alert('Enter a city');
//       } else {
//         getLocData(inp.value);
//       }
//     }
//   });
//   searchBtn.addEventListener('click');
// }

export { useLoc };
