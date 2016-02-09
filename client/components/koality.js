var m       = require('mithril')
var Request = require('../models/requests.js')
var Kompare = require('./kompare.js')
var Koality = module.exports;

Koality.dataOne;
Koality.dataTwo;

Koality.controller = function (options) {
  var ctrl = this;

  ctrl.localOne = null;
  ctrl.localTwo = null;

  ctrl.fetchData = function (one, two) {
    ctrl.error = null;

    Request.fetch(one)
      .then(function(res){
        Koality.localOne = one;
       return Kompare.dataOne = res;
      })
      // .catch(function(){
      //  return prompt('Please Enter A Valid City')
      // })

    Request.fetch(two)
      .then(function(res){
        Koality.localTwo = two;
        return Kompare.dataTwo = res;

      })
      .then(function(){
        m.route('/kompare')
      })
      // .catch(function(){
      //  return prompt('Please Enter A Valid City')
      // })
  }
}


Koality.view = function (ctrl, options) {
  return m('.koality', [
    m('h1.firstHeader', "Welcome to Air Koality!"),
    m('h3.desc', "Kompare the Air Koality of Any Two Cities in the United States"),
    m('form.forms', {}, [
      m('br'),
      m('input.inputs', {
        type: 'text',
        placeholder: "Enter City",
        oninput: function(e) { e.preventDefault; ctrl.localOne = this.value} }),
      m('br'),
      m('br'),
      m('input.inputs', {
        type: 'text',
        placeholder: "Enter City",
        oninput: function(e) { e.preventDefault; ctrl.localTwo = this.value} }),
      m('br'),
      m('br'),
      m('button.buttons', {
        type: 'submit',
        onclick: function (e) { e.preventDefault()
          return ctrl.fetchData(ctrl.localOne, ctrl.localTwo)
       }
     }, 'Check Air Koality!')
    ])
  ])
}
