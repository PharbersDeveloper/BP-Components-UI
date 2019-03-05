import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
	model() {
		return A([
			{ id: 1, value: '将进酒' },
			{ id: 2, value: '桃花源记' },
			{ id: 3, value: '滕王阁序' },
			{ id: 4, value: '林尽水源，便得一山，山有小口，仿佛若有光。 便舍船，从口入。初极狭，才通人。' },

		]);
	}
});
