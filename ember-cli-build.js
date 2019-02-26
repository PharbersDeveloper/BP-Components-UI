'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
	let app = new EmberApp(defaults, {
		'ember-bootstrap': {
			'bootstrapVersion': 4,
			'importBootstrapFont': false,
			'importBootstrapCSS': false
		},
		'ember-prism': {
			'theme': 'okaidia',
			'components': ['scss', 'javascript', 'handlebars', 'markup-templating'], //needs to be an array, or undefined.
			'plugins': ['line-numbers', 'file-highlight']
		},

	});

	return app.toTree();
};
