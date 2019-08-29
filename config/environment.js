'use strict';

module.exports = function (environment) {
	let ENV = {
		modulePrefix: 'bp-components-ui',
		podModulePrefix: 'bp-components-ui/modules',
		environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			},
			EXTEND_PROTOTYPES: {
				// Prevent Ember Data from overriding Date.parse.
				Date: false
			}
		},

		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created
		},
		QueryAddress: {
			host: "http://59.110.31.50",
			port: 9202,
			version: "v1.0",
			db: "DL"
		}
	};

	if (environment === 'development') {
		ENV.Host = "http://59.110.31.50";
		// ENV.Host = "http://192.168.100.157";
		ENV.Port = 9201;
		ENV.Version= 'v1.0';
		ENV.DB = 'DL';
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
		ENV.APP.autoboot = false;
	}

	if (environment === 'production') {
		// here you can enable a production-specific feature
	}

	return ENV;
};
