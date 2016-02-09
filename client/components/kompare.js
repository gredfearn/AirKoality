var m        = require('mithril')
var Request    = require('../models/requests')
var Koality  = require('./koality.js')
var Kompare  = module.exports;


Kompare.controller = function () {
  var ctrl = this;

Kompare.dataOne;
Kompare.dataTwo;

// Request.checker(Kompare.dataOne, Kompare.dataTwo);

}
// m.route.mode = "hash";

Kompare.view = function () {
var descriptionOne     = Kompare.dataOne.breezometer_description;
var mainpollutantOne   = Kompare.dataOne.dominant_pollutant_canonical_name;
var pollutionCauseOne  = Kompare.dataOne.dominant_pollutant_text.causes;
var pollutionEffectOne = Kompare.dataOne.dominant_pollutant_text.effects;

var descriptionTwo     = Kompare.dataTwo.breezometer_description;
var mainpollutantTwo   = Kompare.dataTwo.dominant_pollutant_canonical_name;
var pollutionCauseTwo  = Kompare.dataTwo.dominant_pollutant_text.causes;
var pollutionEffectTwo = Kompare.dataTwo.dominant_pollutant_text.effects;



 return m('.kompare', [
  m('h1', "Koalified Cities:"),
  m('button', {
    type: 'submit',
    onclick: function(e) { e.preventDefault(); m.route('/') }
    }, "Go Kompare Other Cities"),
  m('h2.secondHeader', Koality.localOne),
  m('div.scroll', [
    m('h3', "Over Koality:"),
    m('p', descriptionOne),
    m('h3', "Main Pollutant:"),
    m('p', mainpollutantOne),
    m('h3', "Cause of Pollution:"),
    m('p', pollutionCauseOne),
    m('h3', "Effects of Pollution:"),
    m('p', pollutionEffectOne)
    ]),
  m('br'),
  m('h2.secondHeader', Koality.localTwo),
   m('div.scroll', [
    m('h3', "Over Koality:"),
    m('p', descriptionTwo),
    m('h3', "Main Pollutant:"),
    m('p', mainpollutantTwo),
    m('h3', "Cause of Pollution:"),
    m('p', pollutionCauseTwo),
    m('h3', "Effects of Pollution:"),
    m('p', pollutionEffectTwo)
    ]),

  ])
}


