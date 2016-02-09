var m        = require('mithril')
var Request    = require('../models/requests')
var Koality  = require('./koality.js')
var Kompare  = module.exports;


Kompare.controller = function () {
  var ctrl = this;

Request.checker(Kompare.dataOne, Kompare.dataTwo);
Kompare.dataOne;
Kompare.dataTwo;

m.route.mode = "hash";

}

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
  m('h2.secondHeader', Koality.localOne + ':'),
  m('div.scroll', [
    m('h3.thirdHeader', "Overall Koality:"),
    m('p.pe', descriptionOne),
    m('h3.thirdHeader', "Main Pollutant:"),
    m('p.pe', mainpollutantOne),
    m('h3.thirdHeader', "Cause of Pollution:"),
    m('p.pe', pollutionCauseOne),
    m('h3.thirdHeader', "Effects of Pollution:"),
    m('p.pe', pollutionEffectOne)
    ]),
  m('br'),
  m('h2.secondHeader', Koality.localTwo + ':'),
   m('div.scroll', [
    m('h3.thirdHeader', "Overall Koality:"),
    m('p.pe', descriptionTwo),
    m('h3.thirdHeader', "Main Pollutant:"),
    m('p.pe', mainpollutantTwo),
    m('h3.thirdHeader', "Cause of Pollution:"),
    m('p.pe', pollutionCauseTwo),
    m('h3.thirdHeader', "Effects of Pollution:"),
    m('p.pe', pollutionEffectTwo)
    ]),
   m('button.buttonss', {
    type: 'submit',
    onclick: function(e) { e.preventDefault(); m.route('/') }
    }, "Go Kompare Other Cities")
  ])
}


