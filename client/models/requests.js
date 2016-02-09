var m     = require('mithril');
var Request = module.exports;

Request.fetch = function (location) {
  return m.request({
    method: 'GET',
    url: 'https://api.breezometer.com/baqi/?location=' + location + '&key=d22e9878152a4e998a88660bfc74aa23'
  })
}

Request.checker = function (one, two) {
  if(one === undefined || two === undefined){
    m.route('/')
  }
}
