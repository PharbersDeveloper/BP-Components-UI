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
{{/bp-dropdown}}`
});
