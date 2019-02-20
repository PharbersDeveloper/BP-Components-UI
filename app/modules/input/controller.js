import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		changeInput(value) {
			this.set('inputValue', value);
		}
	}
});
