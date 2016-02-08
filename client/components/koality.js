var m        = require('mithril')
var Koala = require('../models/requests')
var Koality = module.exports;


Koality.controller = function (options) {
  var ctrl = this;

  // ctrl.koal = null;
  // Koala.fetch(location)
  //   .then(function(data){
  //     ctrl.koal = data;
  //   })
  ctrl.localOne      = m.prop('');
  ctrl.localTwo      = m.prop('');

  ctrl.breezometer   = m.prop('');
  ctrl.colored       = m.prop('');
  ctrl.recommend     = m.prop({});
  ctrl.pollutant     = m.prop('');
  ctrl.pollutantDesc = m.prop('');
  ctrl.pollutantText = m.prop({});
}


Koality.view = function (ctrl, options) {
  return m('.my-component', [
    m('h2', options.title)
  ]),
    m('form', 'Compare Cities: ', { /* onsubmit: Koala.fetch(ctrl.localOne), onsubmit: Koala.fetch(ctrl.localTwo) */ }, [
      m('br'),
      m('input', { type: 'text', placeholder: "Enter City", oninput: m.withAttr('value', ctrl.localOne) }),
      m('br'),
      m('input', { type: 'text', placeholder: "Enter City", oninput: m.withAttr('value', ctrl.localTwo) }),
      m('br'),
      m('button', { type: 'submit' }, 'Check Koality!')
      ])
}








