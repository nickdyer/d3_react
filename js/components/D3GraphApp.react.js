var React = require('react');
var CartStore = require('../stores/GraphDataStore');
var D3Graph = require('./D3Graph.react');

// Method to retrieve state from Stores

function getGraphState() {
  return {
    graphdata: GraphDataStore.getGraphData(),
  };
}

var D3GraphApp = React.createClass({

  getInitialState: function() {
    return getGraphState();
  },

  componentDidMount: function() {
    GraphDataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GraphDataStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="flux-cart-app">
        <D3Graph graphdata = {this.state.graphdata} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getGraphState());
  }

});

module.exports = D3GraphApp;

