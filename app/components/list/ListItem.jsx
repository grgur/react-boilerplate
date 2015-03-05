/**
 * List item
 */
var React = require('react');

var ListItem = React.createClass({
	render: function() {
		return (
			<li className="list-group-item">{this.props.label}</li>
		);
	}

});

module.exports = ListItem;
