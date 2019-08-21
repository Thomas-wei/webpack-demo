import _ from 'lodash';
import './style.css';
import './iconfont/iconfont.css';
import Icon from './expand.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // lodash. now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('iconfont');
  element.classList.add('icon-shanchutupian');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  return element;
}

document.body.appendChild(component());