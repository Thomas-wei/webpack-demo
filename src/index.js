// import _ from 'lodash';
import printMe from './print';
import './styles.css';
import { cube } from "./math";

if (process.env.NODE_ENV === 'production') {
  console.log('Looks like we are in development mode!');
}

function getComponent() {
  return import('lodash').then(_ => {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }).catch(error => 'An error occurred while loading the component')
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash. now imported by this script
  // element.innerHTML = _.join(['hello', 'webpack'], ' ');

  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe

  element.appendChild(btn);

  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})

// let element = component() // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);
//
// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新click事件处理
//     document.body.appendChild(element);
//   })
// }