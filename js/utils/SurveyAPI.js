var D3GraphActions = require('../actions/D3GraphActions');

module.exports = {

	// Load mock product data from localStorage into GraphStore via Action
	getSurveyData: function() {
		var data = JSON.parse(localStorage.getItem('surveyResults'));
		D3GraphActions.receiveSurvey(data);
	}

};
