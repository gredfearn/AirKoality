var m       = require('mithril')
var Request = require('../models/requests')

var Koality = module.exports;

var dataOne = null;
var dataTwo = null;

Koality.controller = function (options) {
  var ctrl = this;

  ctrl.localOne = null;
  ctrl.localTwo = null;

  ctrl.fetchData = function (one, two) {
    ctrl.error = null;

    Request.fetch(one)
      .then(function(res){
        dataOne = res;
        console.log('res', res)
      })

    Request.fetch(one)
      .then(function(res){
        dataTwo = res;
        console.log('res', res)
      })
  }

// ctrl.fetchData("Dallas", " austin")

}



Koality.view = function (ctrl, options) {
  return m('.koality', [
    m('h1', "Check Local Air Koality"),
    m('form', 'Compare Cities: ', {}, [
      m('br'),
      m('input', { type: 'text', placeholder: "Enter City", onsubmit: m.withAttr('value', ctrl.localOne) }),
      m('br'),
      m('input', { type: 'text', placeholder: "Enter City", onsubmit: m.withAttr('value', ctrl.localTwo) }),
      m('br'),
      m('button', {
        type: 'submit',
        onsubmit: function () {
          return ctrl.fetchData(ctrl.localOne, ctrl.localTwo)
            .then(function() {
              m.route('/kompare')
        })
       }
     }, 'Check Koality!')
    ])
  ])
}
