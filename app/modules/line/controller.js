import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
	lineDataTm: A([{
		name: 'dataA',
		date: ['2018年第一季度', '2018年第二季度', '2018年第三季度', '2018年第四季度'],
		data: [320, 332, 301, 334]
	},
	{
		name: 'DataB',
		date: ['2018年第一季度', '2018年第二季度', '2018年第三季度', '2018年第四季度'],
		data: [820, 932, 901, 934]
	},
	{
		name: 'DataC',
		date: ['2018年第一季度', '2018年第二季度', '2018年第三季度', '2018年第四季度'],
		data: [420, 555, 509, 364]
	},
	{
		name: 'DataD',
		date: ['2018年第一季度', '2018年第二季度', '2018年第三季度', '2018年第四季度'],
		data: [470, 439, 117, 769]
	}]),
	lineColorTm: A(['#57D9A3', '#79E2F2', '#FFE380', '#8777D9 ']),
	init() {
		this._super(...arguments);
		this.set('lineData', A([{
			name: 'MNC',
			date: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05',
				'2018-06', '2018-07', '2018-08',
				'2018-09', '2018-10', '2018-11', '2018-12'],
			data: [320, 332, 301, 334, 390, 330, 320, 255, 350, 337, 365, 912]
		},
		{
			name: 'ELILILLY GROUP',
			date: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05',
				'2018-06', '2018-07', '2018-08',
				'2018-09', '2018-10', '2018-11', '2018-12'],
			data: [820, 932, 901, 934, 1290, 1330, 1320, 244, 365, 109, 203, 273]
		}]));
		// this.set('lineColor', A(['#0070c0', '#c00000']));
		this.set('legendPosition', { right: '0', type: 'scoll', orient: 'vertical' });
		this.set('grid', { right: '200px', });
	}
});