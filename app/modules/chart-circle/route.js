import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
	init() {
		this._super(...arguments);
	},
	model() {
		return {
			circleData: A([
				{ name: 'prod1', value: '4342' },
				{ name: 'prod2', value: '5342' },
				{ name: 'prod3', value: '2342' },
				{ name: 'prod4', value: '3342' },

			]),
			circleColor: A([
				'red', 'green', 'orange', 'blue'
			])
		}
	}
});
