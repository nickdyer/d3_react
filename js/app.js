window.React = require('react');
var GraphData = require('./GraphData');
var SurveyAPI = require('./utils/SurveyAPI');
var D3GraphApp = require('./components/D3GraphApp.react');

// Load Mock Hospital Data into localStorage

GraphData.init();

//Load Mock API Call
SurveyAPI.getSurveyData();

React.render(
  <D3GraphApp />,
  document.getElementById('d3-canvas')
);
