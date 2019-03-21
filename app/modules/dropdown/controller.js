import Controller from '@ember/controller';

export default Controller.extend({
	dropdownCode: `
{{#bp-dropdown as |dd|}}
	{{#dd.button }}
		{{#if dropdownValue.value}}
			<p>{{dropdownValue.value}}</p>
		{{else}}
			请选择
		{{/if}}
		{{bp-icon icon='down'}}
	{{/dd.button}}
	{{#dd.menu as |menu|}}
		{{#each model as |item|}}
			{{#menu.option value=item onClick=(action (mut dropdownValue))}}
				{{item.value}}
			{{/menu.option}}
		{{/each}}
	{{/dd.menu}}
{{/bp-dropdown}}`,
	simpleUse: `
	{{bp-dropdown-simple
			choosedValue=simpleChoosedValue
			options=model.keyName
			optionKey='name'}}`,
	simpleUse2: `
			{{bp-dropdown-simple
				title='choose your poem'
				desc='which one?'
				valueId=modelId
				options=model.keyName
				optionKey='name'}}`,
	init() {
		this._super(...arguments);
		this.set('dropdownValue', { id: 1, value: '将进酒' });
		this.set('simpleChoosedValue', '将进酒');
		this.set('modelId', 4);

	},
	actions: {
		itemChanged(item) {
			console.log(item);
		}
	}
});
