export default function dataView() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  // header
  const header = document.createElement('header');
  header.classList.add('header');

  const logoCtn = document.createElement('div');
  logoCtn.classList.add('hd-logoctn');
  const logo = document.createElement('h1');
  logo.classList.add('hd-logo');
  logo.textContent = 'Wezaria';

  const btnCtn = document.createElement('div');
  btnCtn.classList.add('hd-btnctn');
  const fBtn = document.createElement('div');
  fBtn.classList.add('fahrenheit');
  fBtn.innerHTML = `&#176F`;
  const cBtn = document.createElement('div');
  cBtn.classList.add('celsius');
  cBtn.classList.add('active');
  cBtn.innerHTML = `&#176C`;

  // section
  const mainDisp = document.createElement('main');
  mainDisp.classList.add('dp-container');

  const summary = document.createElement('div');
  summary.classList.add('dp-summary');
  const breakdown = document.createElement('div');
  breakdown.classList.add('dp-breakdown');

  const locDate = document.createElement('div');
  locDate.classList.add('sum-locDate');
  const loc = document.createElement('h3');
  loc.classList.add('ld-loc');
  const day = document.createElement('p');
  day.classList.add('ld-date');

  const mainInfo = document.createElement('div');
  mainInfo.classList.add('sum-mainfo');
  const weaIcon = document.createElement('div');
  weaIcon.classList.add('mf-icon');
  const sumTemp = document.createElement('h2');
  sumTemp.classList.add('mf-temp');
  const sumCond = document.createElement('p');
  sumCond.classList.add('mf-cond');

  const subInfo = document.createElement('div');
  subInfo.classList.add('sum-subinfo');
  const feelLike = document.createElement('div');
  feelLike.classList.add('si-feelslike');
  for (let i = 1; i < 4; i++) {
    const iconBox = document.createElement('div');
    iconBox.classList.add('pp-icon');
    const contentBox = document.createElement('div');
    contentBox.classList.add('pp-content');

    const cbTitle = document.createElement('p');
    cbTitle.classList.add('ct-Title');
    const cbDetail = document.createElement('p');
    cbDetail.classList.add('ct-Detail');

    contentBox.appendChild(cbTitle);
    contentBox.appendChild(cbDetail);

    feelLike.appendChild(iconBox);
    feelLike.appendChild(contentBox);
  }
  const precip = document.createElement('div');
  precip.classList.add('si-precprob');
  for (let i = 1; i < 4; i++) {
    const iconBox = document.createElement('div');
    iconBox.classList.add('pp-icon');
    const contentBox = document.createElement('div');
    contentBox.classList.add('pp-content');

    const cbTitle = document.createElement('p');
    cbTitle.classList.add('ct-Title');
    const cbDetail = document.createElement('p');
    cbDetail.classList.add('ct-Detail');

    contentBox.appendChild(cbTitle);
    contentBox.appendChild(cbDetail);

    precip.appendChild(iconBox);
    precip.appendChild(contentBox);
  }
  /* icon - 
  title
  detail */

  const searchCtn = document.createElement('div');
  searchCtn.classList.add('bd-searchCtn');
  const searchBar = document.createElement('div');
  searchBar.classList.add('sc-searchBar');
  const inpt = document.createElement('input');
  inpt.id = 'sb-search';
  inpt.type = 'text';
  inpt.placeholder = 'search for location...';
  const sbSearch = document.createElement('button');
  sbSearch.classList.add('sb-searchBtn');
  sbSearch.textContent = 'search';
  const sbGeo = document.createElement('button');
  sbGeo.classList.add('sb-geoBtn');
  sbGeo.textContent = 'geo';

  const todayBd = document.createElement('div');
  todayBd.classList.add('bd-todaydetails');

  const tdTitle = document.createElement('p');
  tdTitle.classList.add('td-title');
  tdTitle.textContent = "today's details";

  for (let i = 1; i < 10; i++) {
    const tdInfo = document.createElement('div');
    tdInfo.classList.add(`td-info${i}`);

    const tdSubTitle = document.createElement('h4');
    tdSubTitle.classList.add('td-subTitle');
    const tdSubIcon = document.createElement('div');
    tdSubIcon.classList.add('td-subIcon');
    const tdSubDetail = document.createElement('div');
    tdSubDetail.classList.add('td-subDetail');

    tdInfo.appendChild(tdSubTitle);
    tdInfo.appendChild(tdSubIcon);
    tdInfo.appendChild(tdSubDetail);

    todayBd.appendChild(tdInfo);
  }

  /* 
  info
  tempmax
  tempmin
  uvindex
  windspeed
  visibility
  humidity
  sunrise/set */
  /* 
  title
  icon
  detail
  */

  const days = document.createElement('div');
  days.classList.add('bd-daysForecast');
  const dfTitle = document.createElement('p');
  dfTitle.classList.add('df-title');
  dfTitle.textContent = 'weekly forecast';

  for (let i = 1; i < 8; i++) {
    const dfInfo = document.createElement('div');
    dfInfo.classList.add(`df-info${i}`);

    const dfSubTitle = document.createElement('h4');
    dfSubTitle.classList.add('df-subTitle');
    const dfSubIcon = document.createElement('div');
    dfSubIcon.classList.add('df-subIcon');
    const dfSubDetail = document.createElement('div');
    dfSubDetail.classList.add('df-subDetail');

    dfInfo.appendChild(dfSubTitle);
    dfInfo.appendChild(dfSubIcon);
    dfInfo.appendChild(dfSubDetail);

    days.appendChild(dfInfo);
  }
  /* 7 days
  day
  date
  icon
  hi/lo */

  // appending elements
  // header
  logoCtn.appendChild(logo);
  btnCtn.appendChild(cBtn);
  btnCtn.appendChild(fBtn);

  header.appendChild(logoCtn);
  header.appendChild(btnCtn);

  // main display
  // summary
  locDate.appendChild(loc);
  locDate.appendChild(day);

  mainInfo.appendChild(weaIcon);
  mainInfo.appendChild(sumTemp);
  mainInfo.appendChild(sumCond);

  subInfo.appendChild(feelLike);
  subInfo.appendChild(precip);

  summary.appendChild(locDate);
  summary.appendChild(mainInfo);
  summary.appendChild(subInfo);

  // breakdown
  searchBar.appendChild(inpt);
  searchBar.appendChild(sbSearch);
  searchBar.appendChild(sbGeo);

  searchCtn.appendChild(searchBar);
  todayBd.appendChild(tdTitle);
  days.appendChild(dfTitle);

  breakdown.appendChild(searchCtn);
  breakdown.appendChild(todayBd);
  breakdown.appendChild(days);

  // main
  mainDisp.appendChild(summary);
  mainDisp.appendChild(breakdown);

  // container
  container.appendChild(header);
  container.appendChild(mainDisp);
}
