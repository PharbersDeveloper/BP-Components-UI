import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		changeInput(value) {
			this.set('inputValue', value);
		},
		keyPress(event) {
			this.set('inputValuepd2', event.target.value);
		}
	}
});
