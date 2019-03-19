import Controller from '@ember/controller';

export default Controller.extend({
	vertical: false,
	radioCode: `{{#choose-group 
			type="radio" 
			vertical=vertical 
			onChange=(action 'chooseItem') as |choose|}}
		{{#each model as |radio|}}
			{{choose.item radio=radio}}
		{{/each}}
	{{/choose-group}}`,
	checkboxCode: `{{#choose-group 
		type="checkbox" 
		vertical=vertical 
		onChange=(action 'chooseItem') as |choose|}}
		{{#each model as |radio|}}
			{{choose.item radio=radio}}
		{{/each}}
	{{/choose-group}}`,
	init() {
		this._super(...arguments);
		this.set('radioValue', { id: 1, value: 'man', label: 'man-label' });
		this.set('radioValue1', 'outside');
		this.set('checkboxValue', [{ id: 1, value: 'man', label: 'man-label' }]);
		this.set('checkboxValue1', ['outside'])

	},
	actions: {
		chooseItem(item) {
			if (item instanceof Array) {
				this.set('checkboxValue', item);
			} else {
				this.set('radioValue', item.value)
			}
		}
	}
});
