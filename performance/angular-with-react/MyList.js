(function() {
	var MyList = React.createClass({
		displayName: 'MyList',
		render: function() {
			var items = [];
			for (var i = 0; i < this.props.data.length; i++) {
				items.push(
			        <div className="col-md-3 test-data">
			            <span>Number: {this.props.data[i].num}</span>
			        </div>
				);
			}
			return React.createElement('div', null, items);
		}
	});
})();