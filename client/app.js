var m       = require('mithril')

var Koality = require('./components/koality.js')
var Kompare = require('./components/kompare.js')

//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

//
// Client-side routing
//
m.route.mode = 'pathname'

m.route(document.getElementById('app'), "/", {

    "/": Koality,
    "/kompare": Kompare

})
