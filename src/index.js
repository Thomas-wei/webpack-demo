import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // lodash. now imported by this script
  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());