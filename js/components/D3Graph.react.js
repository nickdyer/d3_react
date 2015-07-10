var React = require('react');
var D3GraphActions = require('../actions/D3GraphActions');

var D3Graph = React.createClass({

  render: function() {
    return (
      <div className="graph">
        <h1 className="name">Graph Time</h1>
        <p>{this.props.graphdata.name}</p>
      </div>
    );
  },

});

module.exports = D3Graph;

