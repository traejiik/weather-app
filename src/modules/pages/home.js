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
  const appDesc = document.createElement('p');
  appDesc.classList.add('mn-desc');
  appDesc.textContent = 'the floating weather city';

  const elCtn = document.createElement('div');
  elCtn.classList.add('main-subctn');
  const inp = document.createElement('input');
  inp.type = 'text';
  inp.id = 'city-search';
  inp.placeholder = 'Enter a City...';
  const btnCtn = document.createElement('div');
  btnCtn.classList.add('mn-btn-ctn');
  const myLoc = document.createElement('button');
  myLoc.classList.add('mn-geoLoc');
  myLoc.textContent = 'get my location';
  const customLoc = document.createElement('button');
  customLoc.classList.add('mn-searchLoc');
  customLoc.textContent = 'search';

  btnCtn.appendChild(myLoc);
  btnCtn.appendChild(customLoc);

  elCtn.appendChild(inp);
  elCtn.appendChild(btnCtn);

  textbox.appendChild(appTitle);
  textbox.appendChild(appDesc);

  mainDiv.appendChild(textbox);
  mainDiv.appendChild(elCtn);

  container.appendChild(mainDiv);
}
