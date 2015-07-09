var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var D3GraphConstants = require('../constants/D3GraphConstants');
var _ = require('underscore');

// Define initial data points

var _graphdata = {};

function loadProductData(data) {
  _graphdata = data[0];
}

// Extend ProductStore with EventEmitter to add eventing capabilities
var ProductStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  getGraphData: function() {
    return _graphdata;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ProductStore.emitChange();

  return true;

});

module.exports = ProductStore;

