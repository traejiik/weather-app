import './styles.css';
import initPage from './modules/pages/home';
import { useLoc, searchCity } from './modules/evListeners';

function initLoad() {
  initPage();
  useLoc();
  searchCity();
}

initLoad();
