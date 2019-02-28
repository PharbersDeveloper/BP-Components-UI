import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
	model() {
		return A([
			{ id: 1, value: 'a' },
			{ id: 2, value: 'b' },
			{ id: 3, value: 'c' },
		]);
	}
});
