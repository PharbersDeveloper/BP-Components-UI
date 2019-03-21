import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
	model() {
		return RSVP.hash({
			objectStyle: [{ id: 1, value: 'man', label: 'man-label' },
			{ id: 2, value: 'women', label: 'women-babel' },
			{ id: 3, value: 'unknow', label: 'unknow-babel' }],
			onlyValue: ['outside', 'inside', 'both']
		})
	}
});
