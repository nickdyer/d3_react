var AppDispatcher = require('../dispatcher/AppDispatcher');
var D3GraphConstants = require('../constants/D3GraphConstants');

//Define actions object
var D3GraphActions = {
  // Receive initial product data
  receiveSurvey: function(data) {
    AppDispatcher.handleAction({
      actionType: D3GraphConstants.RECEIVE_DATA,
      data: data
    })
  }
};

module.exports = D3GraphActions;

