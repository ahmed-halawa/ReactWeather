var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// load foundation
require('style!css!sass!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="examples" component={Examples} />
        <Route path="about" component={About} />
        <IndexRoute component={Weather}/>
      </Route>
  </Router>,
  document.getElementById('app')
);


//http://api.openweathermap.org/data/2.5/weather?q=London,
//uk&appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial