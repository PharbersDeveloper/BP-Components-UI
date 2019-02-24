import Controller from '@ember/controller';

export default Controller.extend({
	btnDefault: `
	{{#bp-button}}default{{/bp-button}}`,
	btnPrimary: `
	{{#bp-button type="primary"}}Primary{{/bp-button}}`,
	btnDisabled: `
	{{#bp-button disabled=true}}disabled button{{/bp-button}}`,
	btnBlock: `
	{{#bp-button block=true onClick=(action 'submit')}}block button{{/bp-button}}`,
	btnBasic: `
	{{#bp-button type="primary" onClick=(action 'submit')}}primary{{/bp-button}}
	{{#bp-button type="danger" onClick=(action 'submit')}}danger{{/bp-button}}
	{{#bp-button type="warning" onClick=(action 'submit')}}Warning{{/bp-button}}
	{{#bp-button type="link" onClick=(action 'submit')}}Link{{/bp-button}}
	{{#bp-button type="link-subtle" onClick=(action 'submit')}}Link-Subtle{{/bp-button}}
	{{#bp-button type="subtle" onClick=(action 'submit')}}Subtle{{/bp-button}}
	{{#bp-button type="default" onClick=(action 'submit')}}default{{/bp-button}}`,
	btnTotalDisabled: `
	{{#bp-button type="primary" disabled=true onClick=(action 'submit')}}primary{{/bp-button}}
	{{#bp-button type="danger" disabled=true onClick=(action 'submit')}}danger{{/bp-button}}
	{{#bp-button type="warning" disabled=true onClick=(action 'submit')}}Warning{{/bp-button}}
	{{#bp-button type="link" disabled=true onClick=(action 'submit')}}Link{{/bp-button}}
	{{#bp-button type="link-subtle" disabled=true onClick=(action 'submit')}}Link-Subtle{{/bp-button}}
	{{#bp-button type="subtle" disabled=true onClick=(action 'submit')}}Subtle{{/bp-button}}
	{{#bp-button type="default" disabled=true}}disabled default{{/bp-button}}`,
	btnIcon: `
	{{#bp-button type="primary"
		onClick=(action 'submit')
		icon="https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg"}}
		primary
	{{/bp-button}}
	{{#bp-button type="primary"
		onClick=(action 'submit')
		iconOnly=true
		icon="https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg"}}
	{{/bp-button}}`,
	actions: {
		submit() {
			// window.alert('click btn');
		}
	}
});
