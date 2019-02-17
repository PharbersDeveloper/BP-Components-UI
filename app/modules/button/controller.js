import Controller from '@ember/controller';

export default Controller.extend({
	btnDefault: `{{#bp-button}}default{{/bp-button}}`,
	btnPrimary: `{{#bp-button type="primary"}}Primary{{/bp-button}}`,
	btnDisabled: `{{#bp-button disabled=true}}disabled button{{/bp-button}}`,
	btnBlock: `{{#bp-button block=true onClick=(action 'submit')}}block button{{/bp-button}}`,
	btnBasic: `{{#bp-button type="primary" onClick=(action 'submit')}}primary{{/bp-button}}
		{{#bp-button type="secondary" onClick=(action 'submit')}}secondary{{/bp-button}}
		{{#bp-button type="danger" onClick=(action 'submit')}}danger{{/bp-button}}
		{{#bp-button type="default" disabled=false onClick=(action 'submit')}}default{{/bp-button}}
		{{#bp-button type="default" disabled=true}}disabled default{{/bp-button}}
		{{#bp-button type="primary"
	            	onClick=(action 'submit')
	            	icon="https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg"}}
	        primary
		{{/bp-button}}`,
	btnReverse: `{{#bp-button type="primary" reverse=true onClick=(action 'submit')}}reverse primary{{/bp-button}}
		{{#bp-button type="secondary" reverse=true onClick=(action 'submit')}}reverse secondary{{/bp-button}}
		{{#bp-button type="danger" reverse=true onClick=(action 'submit')}}reverse danger{{/bp-button}}
		{{#bp-button type="default" reverse=true disabled=true}}reverse default{{/bp-button}}
		{{#bp-button type="primary" 
	            	reverse=true 
	            	onClick=(action 'submit')
	            	icon="https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg"}}reverse
		    primary
		{{/bp-button}}`,

	actions: {
		submit() {
			// window.alert('click btn');
		}
	}
});
