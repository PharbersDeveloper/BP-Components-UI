import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { A } from '@ember/array';

export default Route.extend({
	model() {
		return hash({
			scatterData: A([
				[[66666, 57, 100000, 'test1']],
				[[12225, 81, 100000, 'test2']],
				[[55555, 57, 100000, 'test3']],
				[[33333, 45, 100000, 'test4']],
				[[22222, 57, 255555, 'test5']]
			])
		})
	}
});
