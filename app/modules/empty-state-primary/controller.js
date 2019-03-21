import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		primaryClick() {
			window.alert('has click primary btn');
		}
	}
});
