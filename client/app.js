var m = require('mithril')
var MyComponent = require('./components/koality.js')

//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

//
// Client-side routing
//
m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {
    // Controllers are optional
    // controller: function () {},

    view: function (ctrl) {
      return m('.app', [
        m('h1', 'Air Koality'),
        m.component(MyComponent, { title: 'Check Your Local Air Koality!' })
        ])

    }
  }

})
