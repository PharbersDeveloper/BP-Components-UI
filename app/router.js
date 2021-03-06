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
  this.route('choose');
  this.route('button-group');
  this.route('dropdown');
  this.route('input');
  this.route('search-bar');
  this.route('card');
  this.route('navs');
  this.route('progress');
  this.route('modal');
  this.route('tabs');
  this.route('badge');
  this.route('empty-state');
  this.route('page-header');
  this.route('pagination');
  this.route('icon');
  this.route('line');
  this.route('bar');
  this.route('chart-pie');
  this.route('login');
  this.route('empty-state-primary');
  this.route('empty-state-double-btn');
  this.route('empty-state-link-button');
  this.route('empty-state-no-button');
  this.route('chart-radar');
  this.route('chart-circle');
  this.route('charts');
  this.route('avatar');
  this.route('dashboard');
  this.route('datepicker');
  this.route('table');
  this.route('without-code');
});

export default Router;
