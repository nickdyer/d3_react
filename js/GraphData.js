module.exports = {
	// Load mock product data into localStorage
	init: function() {
		localStorage.clear();
		localStorage.setItem('surveyResults', JSON.stringify([
      {
        name: 'Hospital Numbers',
        variants: [
          {
            name: 'London',
            numHospitals: 35
          },
          {
            name: 'Birmingham',
            numHospitals: 25
          },
          {
            name: 'Truro',
            numHospitals: 3
          }
        ]
      }
		]));
	}

};

