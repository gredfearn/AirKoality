var m        = require('mithril')
var Request    = require('../models/requests')
var Koality  = require('./koality.js')
var Kompare  = module.exports;



Kompare.controller = function () {
  var ctrl = this;
  console.log(Koality.dataOne)

}
m.route.mode = "hash";

Kompare.view = function () {
 return m('.kompare', [
  m('h1', "KOMPARE VIEW"),
  m('button', { type: 'submit',
    onsubmit: m.route('/') },'Kompare Again')
  ])
}


// m.route(document.body, "/kompare", {
//     "/dashboard/:userID": dashboard
// });
