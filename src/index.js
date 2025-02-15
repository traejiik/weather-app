import './styles.css';
import initPage from './modules/pages/home';
import dataView from './modules/pages/dataview';
import { useLoc, searchCity } from './modules/evListeners';

function initLoad() {
  initPage();
  useLoc();
  searchCity();
}

initLoad();
// dataView();
