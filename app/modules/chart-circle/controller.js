import Controller from '@ember/controller';

export default Controller.extend({

	init() {
		this._super(...arguments);
		this.set('opts', {
			width: '500px',
			height: '500px'
		})
	}
});
