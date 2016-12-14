(function() {

	var module = angular.module('SinglePageApp', ['react']);

	module.controller('IndexController', ['$scope', function($scope) {
	}]);

	var ParagraphComponent = React.createClass({
		getInitialState: function() {
			return {totalItems: 1000}
		},
		render: function() {
			return React.DOM.p(null, 'Make a random list with about ' + this.state.totalItems + ' items, rendered into HTML for displaying. Then, measuring time before and after rendering whether it\'s take how long.')
		}
	});

	module.directive('paragraph', function(reactDirective) {
		return reactDirective(ParagraphComponent);
	});

	var NumberList = React.createClass({
		render: function() {
			var items = [];
			for (var i = 0; i < this.props.data.length; i++) {
				// items.push(
			 //        <div className="col-md-3 test-data">
			 //            <span>Number: {this.props.data[i].num}</span>
			 //        </div>
				// );
			}
			// return React.createElement('div', null, items);
		}
	});

	var RunButton = React.createClass({
		getInitialState: function() {
			return {
				runText: 'Run'
			}
		},
		run: function() {
			this.setState({
				runText: 'aaa'
			});
		},
		render: function() {
			console.log('rendering');
			return React.DOM.div({className: 'run', id: 'run', onClick: this.run}, this.state.runText);
		}
	});


	module.directive('runbutton', function(reactDirective) {
		return reactDirective(RunButton);
	});

})();