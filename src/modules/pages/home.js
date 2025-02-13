export default function initPage() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('page-intro');

  const textbox = document.createElement('div');
  textbox.classList.add('main-text');
  const appTitle = document.createElement('h1');
  appTitle.classList.add('mn-title');
  appTitle.textContent = 'Wezaria';

  const descText = document.createElement('div');
  descText.classList.add('mn-desc');
  const appDesc = document.createElement('p');
  appDesc.classList.add('desc-p');
  appDesc.textContent = 'the weather sky island';

  const elCtn = document.createElement('div');
  elCtn.classList.add('main-subctn');
  const inp = document.createElement('input');
  inp.type = 'text';
  inp.id = 'city-search';
  inp.placeholder = 'Enter a City...';
  const btnCtn = document.createElement('div');
  const appExp = document.createElement('p');
  appExp.classList.add('desc-p');
  appExp.textContent =
    'use your current location or enter a city and click search';
  btnCtn.classList.add('mn-btn-ctn');
  const myLoc = document.createElement('button');
  myLoc.classList.add('mn-geoLoc');
  myLoc.textContent = 'use my location';
  const customLoc = document.createElement('button');
  customLoc.classList.add('mn-searchLoc');
  customLoc.textContent = 'search';

  btnCtn.appendChild(myLoc);
  btnCtn.appendChild(customLoc);

  elCtn.appendChild(inp);
  elCtn.appendChild(appExp);
  elCtn.appendChild(btnCtn);

  descText.appendChild(appDesc);

  textbox.appendChild(appTitle);
  textbox.appendChild(descText);

  mainDiv.appendChild(textbox);
  mainDiv.appendChild(elCtn);

  container.appendChild(mainDiv);
}
