import './styles.css';
import initPage from './modules/pages/home';
import { homeListeners } from './modules/evListeners';

function initLoad() {
  initPage();
  homeListeners();
}

initLoad();
