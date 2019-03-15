import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		login(name, password) {
			localStorage.setItem('token', `${name}${password}`)
			this.transitionToRoute('index')
		}
	}
});
