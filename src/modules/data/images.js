/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import sunnyImg from '../../assets/images/sunny.jpg';
import rainyImg from '../../assets/images/rain.jpg';
import cloudyImg from '../../assets/images/cloudy.jpg';
import snowyImg from '../../assets/images/snow.jpg';

export default function getImagePath(condition) {
  const imagePaths = {
    clear: sunnyImg,
    rain: rainyImg,
    cloudy: cloudyImg,
    snow: snowyImg,
  };

  for (const key in imagePaths) {
    if (condition.toLowerCase().includes(key)) {
      return imagePaths[key];
    }
  }
}
