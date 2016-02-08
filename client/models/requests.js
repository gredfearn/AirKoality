var m     = require('mithril');
var Koala = require('../components/koality.js')
var Koala = module.exports;

Koala.fetch = function (location) {
  return m.request({ method: 'GET', url: 'https://api.breezometer.com/baqi/?location=' + location + '&key=d22e9878152a4e998a88660bfc74aa23' })
}
