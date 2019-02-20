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
	actions: {
		chooseItem(item) {
			if (item instanceof Array) {
				let value = '';

				for (let ele of item) {
					value += ele.value;
				}
				this.set('checkboxValue', value)
			} else {
				this.set('radioValue', item.value)

			}
		}
	}
});
