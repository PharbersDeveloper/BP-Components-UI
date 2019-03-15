import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		primaryClick() {
			window.alert('has click primary btn');
		},
		standardClick() {
			window.alert('has click standard btn');
		}
	}
});
