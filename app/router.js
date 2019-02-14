import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('layout');
  this.route('default');
  this.route('radio-checkbox');
  this.route('theme-colors');
  this.route('button');
});

export default Router;
