var m        = require('mithril')
var Request    = require('../models/requests')
var Koality  = require('./koality.js')
var Kompare  = module.exports;


Kompare.controller = function () {
  var ctrl = this;

Kompare.dataOne;
Kompare.dataTwo;

}
m.route.mode = "hash";

Kompare.view = function () {
var descriptionOne     = Kompare.dataOne.breezometer_description
var descriptionTwo     = Kompare.dataTwo.breezometer_description
var mainpollutantOne   = Kompare.dataOne.dominant_pollutant_canonical_name
var mainpollutantTwo   = Kompare.dataTwo.dominant_pollutant_canonical_name
var pollutionCauseOne  = Kompare.dataOne.dominant_pollutant_text.causes
var pollutionCauseTwo  = Kompare.dataTwo.dominant_pollutant_text.causes
var pollutionEffectOne = Kompare.dataOne.dominant_pollutant_text.effects
var pollutionEffectTwo = Kompare.dataTwo.dominant_pollutant_text.effects



console.log('descriptionOne', descriptionOne)
 return m('.kompare', [
  m('h1', "Koalified Cities"),
  m('div', [
    m('h1', Koality.localOne),
    m('p', descriptionOne),
    m('p', mainpollutantOne),
    m('p', pollutionCauseOne),
    m('p', pollutionEffectOne)
    ]),
   m('div', [
    m('h1', Koality.localTwo),
    m('p', descriptionTwo),
    m('p', mainpollutantTwo),
    m('p', pollutionCauseTwo),
    m('p', pollutionEffectTwo)
    ]),
  m('button', {
    type: 'submit',
    onclick: function(e) { e.preventDefault(); m.route('/') }
    }, "Go Kompare Other Cities")
  ])
}


