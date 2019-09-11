import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
	size: 'medium',
	sizeList: A(['large', 'medium', 'small']),
	overview: `{{bp-icon icon='abord'}}
			{{bp-icon icon='add'}}
			{{bp-icon icon='check-circle'}}`,
	overviewColorful: `<p class='colorful'>
				{{bp-icon icon='abord'}}
				{{bp-icon icon='add'}}
				{{bp-icon icon='check-circle'}}
			</p>
			styles.scss
			.colorful { color: lightblue;}`,
	insideColorful: `<p class='inside-colorful'>
				{{bp-icon icon='check-circle'}}
			</p>
			styles.scss
			.inside-colorful { svg { path: { fill: lightgreen}}}`,
	iconSize: `{{bp-icon icon='check-circle' size='large'}}
			{{bp-icon icon='check-circle'}}
			{{bp-icon icon='check-circle' size='small'}}`,
	actions: {
		copy(value) {
			let icon = `{{bp-icon icon='${value}'}}`;

			const input = document.createElement('input');

			document.body.appendChild(input);
			input.setAttribute('value', icon);
			input.select();
			if (document.execCommand('copy')) {
				document.execCommand('copy');
			}
			document.body.removeChild(input);
		}
	},
	icons: A([
		'abord',
		'add',
		'app-switcher',
		'calendar',
		'case',
		'check-circle',
		// 'chevron-next-year',
		'china-money',
		'credit-card',
		'cross',
		'dashboard',
		'data',
		'down',
		'download',
		'edit',
		'email',
		'error',
		'export',
		'female',
		'growth',
		'history',
		'hospital-building',
		'hospital-checked',
		'hospital-checked-disabled',
		'hospital-sign',
		'hospital-unchecked',
		'image',
		'increase',
		'info',
		'left',
		'male',
		'management',
		'marketplace',
		'meeting-quota',
		'mission-1',
		'mission-2',
		'mission-3',
		'mission-4',
		'more',
		'nav-person',
		'next-year',
		'notification',
		'office-building',
		'pc',
		'people',
		'person',
		'pie',
		'pill',
		'point',
		'pre-year',
		'preferences',
		'priority-high',
		'priority-low',
		'product-info',
		'product',
		'qr',
		'question-circle',
		'raised-hand',
		'representative',
		'right',
		'search',
		'sign-out',
		'simulation',
		'sort-asc',
		'sort-default',
		'sort-des',
		'story',
		'target',
		'teaching-center',
		'team',
		'time-left',
		'time',
		'training',
		'trash',
		'up',
		'upload',
		'warning'
	])
});
