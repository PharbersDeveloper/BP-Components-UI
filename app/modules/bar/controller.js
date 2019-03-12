import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
	init() {
		this._super(...arguments);
		this.set('barData', A([
			{ prodName: 'Stanley May', value: 1.6861, type: 'MNC' },
			{ prodName: 'Ray Dean', value: 4.599, type: 'Local' },
			{ prodName: 'Celia Sims', value: 3.9925, type: 'MNC' },
			{ prodName: 'Alberta Fields', value: 1.1181, type: 'Local' },
			{ prodName: 'Annie Mack', value: 1.4165, type: 'MNC' },
			{ prodName: 'Ricardo Roy', value: 2.4944, type: 'Local' },
			{ prodName: 'Lottie Parsons', value: 2.0540, type: 'Local' },
			{ prodName: 'Isabelle Walters', value: 1.9328, type: 'MNC' },
			{ prodName: 'Gary Ortega', value: 2.7467, type: 'Local' },
			{ prodName: 'Julian Morrison', value: 2.3548, type: 'MNC' },
			{ prodName: 'Charlotte Fields', value: 5.4294, type: 'Local' },
			{ prodName: 'Carlos Price', value: 9.825, type: 'Local' },
			{ prodName: 'Isabella Schwartz', value: 9.319, type: 'MNC' },
			{ prodName: 'Nathaniel Keller', value: 1.6843, type: 'Local' },
			{ prodName: 'Frank King', value: 1.9282, type: 'MNC' },
			{ prodName: 'Maria Ramos', value: 6.4827, type: 'Local' },
			{ prodName: 'Rena Harper', value: 5.1307, type: 'Local' },
			{ prodName: 'Gene Johnston', value: 3.3600, type: 'MNC' },
			{ prodName: 'Leon Watson', value: 5.5585, type: 'Local' },
			{ prodName: 'May Stevenson', value: 5.5079, type: 'Local' },
			{ prodName: 'Jimmy Holmes', value: 3.2692, type: 'MNC' },
			{ prodName: 'Ernest Anderson', value: 1.397, type: 'Lilly' },
		]));

	},
});
