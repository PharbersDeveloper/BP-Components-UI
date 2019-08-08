import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import { htmlSafe } from '@ember/template';

export default Controller.extend({
	direction: 'row',
	main: 'start',
	mainList: A(['start', 'end', 'center', 'between', 'around']),
	cross: 'stretch',
	crossList: A(['start', 'end', 'center', 'stretch', 'baseline']),
	wrap: false,
	multi: 'stretch',
	multiList: A(['start', 'end', 'center', 'between', 'around', 'stretch']),
	layoutCode: computed('direction', 'main', 'cross', 'wrap', 'multi', function () {
		let { direction, main, cross, wrap, multi } =
			this.getProperties('direction', 'main', 'cross', 'wrap', 'multi');

		return htmlSafe(`    {{#bp-layout direction=<span>'${direction}'</span> main=<span>'${main}' </span>
			cross=<span>'${cross}'</span> wrap=<span>'${wrap}'</span> multi=<span>'${multi}'</span>}}<br />
				{{/bp-layout}}
			`)
	}),
});

