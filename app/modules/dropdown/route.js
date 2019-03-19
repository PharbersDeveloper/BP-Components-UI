import Route from '@ember/routing/route';
import { A } from '@ember/array';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
		return hash({
			keyValue: A([
				{ id: 1, value: '将进酒' },
				{ id: 2, value: '桃花源记' },
				{ id: 3, value: '滕王阁序' },
				{ id: 4, value: '林尽水源，便得一山，山有小口，仿佛若有光。 便舍船，从口入。初极狭，才通人。' },

			]),
			keyName: A([
				{ id: 1, name: '将进酒' },
				{ id: 2, name: '桃花源记' },
				{ id: 3, name: '滕王阁序' },
				{ id: 4, name: '林尽水源，便得一山，山有小口，仿佛若有光。 便舍船，从口入。初极狭，才通人。' },

			]),
		})
	}
});
