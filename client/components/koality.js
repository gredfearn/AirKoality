var m       = require('mithril')
var Request = require('../models/requests')
var Koality = module.exports;

Koality.dataOne = null;
Koality.dataTwo = null;

Koality.controller = function (options) {
  var ctrl = this;

  ctrl.localOne = null;
  ctrl.localTwo = null;

  ctrl.fetchData = function (one, two) {
    ctrl.error = null;

    Request.fetch(one)
      .then(function(res){
        Koality.dataOne = res;
        console.log('res', res)
      })

    Request.fetch(two)
      .then(function(res){
        Koality.dataTwo = res;
        console.log('res', res);
        m.route('/kompare');
      })
  }
}


Koality.view = function (ctrl, options) {
  return m('.koality', [
    m('h1', "Check Local Air Koality"),
    m('form', 'Compare Cities: ', {}, [
      m('br'),
      m('input', { type: 'text', placeholder: "Enter City", oninput: function(e) { e.preventDefault; ctrl.localOne = this.value} }),
      m('br'),
      m('input', { type: 'text', placeholder: "Enter City", oninput: function(e) { e.preventDefault; ctrl.localTwo = this.value} }),
      m('br'),
      m('button', {
        type: 'submit',
        onclick: function (e) { e.preventDefault()
          return ctrl.fetchData(ctrl.localOne, ctrl.localTwo)
       }
     }, 'Check Air Koality!')
    ])
  ])
}