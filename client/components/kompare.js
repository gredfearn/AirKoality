var m        = require('mithril')
var Request    = require('../models/requests')
var Koality  = require('./koality.js')
var Kompare  = module.exports;

var dataOne = Koality.dataOne;
var dataTwo = Koality.dataTwo;

Kompare.controller = function () {
  var ctrl = this;
  console.log('Koality.dataOne', dataOne)


}
m.route.mode = "hash";

Kompare.view = function () {
 return m('.kompare', [
  m('h1', "Koalified Cities"),
  m('button', { type: 'submit',
    onclick: m.route('/') },'Kompare Again')
  ])
}


