import Controller from '@ember/controller';

export default Controller.extend({
	btnRadio: `
{{#bp-button-group
	value=buttonGroupValue 
	type="radio" 
	vertical=vertical 
	onChange=(action (mut buttonGroupValue)) as |bg|}}
	{{#bg.button type="default" value=1}}1{{/bg.button}}
	{{#bg.button type="default" value=2}}second {{/bg.button}}
	{{#bg.button type="default" value=3}}3{{/bg.button}}
{{/bp-button-group}}`,
	btnCheckbox: `
{{#bp-button-group
	value=buttonGroupValue2
	type="checkbox" 
	vertical=vertical 
	onChange=(action (mut buttonGroupValue2)) as |bg|}}
	{{#bg.button type="default" value=1}}1{{/bg.button}}
	{{#bg.button type="default" value=2}}second button{{/bg.button}}
	{{#bg.button type="default" value=3}}3{{/bg.button}}
{{/bp-button-group}}`,
	vertical: false,
	actions: {
		changeVertical() {
			this.toggleProperty('vertical')
		}
	}
});
