/**
 * List component
 */
var React = require('react'),
    ListItem = require('./ListItem');

var List = React.createClass({
	render: function() {
		var items = this.props.items;

		return (
			<div>
				<div className="well">List</div>
                <ul className="list-group">
				{
                    items.map(function (item) {
						var id = item.id || Date.now();

                        return (
                            <ListItem key={id} label={item.label} />
                        );
                    })
                }
                </ul>
			</div>
		);
	}

});

module.exports = List;
