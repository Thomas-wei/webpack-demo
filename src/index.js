import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var br = document.createElement('br');

  btn.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(btn);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;

    print();
  });

  return element;
}

document.body.appendChild(component());