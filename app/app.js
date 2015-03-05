var React = require('react'),
    List = require('./components/list/List');

var App = React.createClass({
    render: function () {
		var items = [
			{label: 'One', id: 'listitem1'},
			{label: 'Two', id: 'listitem2'}
		];

        return (
			<div className="page-header">
				< h1 > <i className="fa fa-user-secret"></i> Hello world!! < /h1>
				< hr />
				<List items={items}/>
			</div>
			);
    }

});

React.render(<App />, document.body);

module.exports = App;
