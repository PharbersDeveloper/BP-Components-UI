import Controller from '@ember/controller';

export default Controller.extend({
	mockData() {
		let that = this;

		that.set('lineOption', {
			xAxis: {
				type: 'category',
				data: ['2018-01', '2018-02', '2018-03', '2018-04', '2018-05',
					'2018-06', '2018-07', '2018-08',
					'2018-09', '2018-10', '2018-11', '2018-12'],
				// axisLabel: {
				// 	interval: 0,
				// 	rotate: 40
				// }
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				right: '10%',
				data: ['MNC', 'ELILILLY GROUP']
			},
			// toolbox: {
			// 	feature: {
			// 		saveAsImage: {},
			// 		magicType: {
			// 			type: ['line', 'bar', 'tiled']
			// 		}
			// 	}
			// },
			color: ['#0070c0', '#c00000'],
			yAxis: {
				type: 'value'
			},
			series: [{
				name: 'MNC',
				type: 'line',
				stack: 'share',
				data: [320, 332, 301, 334, 390, 330, 320, 255, 350, 337, 365, 912]
			},
			{
				name: 'ELILILLY GROUP',
				type: 'line',
				stack: 'share',
				data: [820, 932, 901, 934, 1290, 1330, 1320, 244, 365, 109, 203, 273]
			}]
		});
	},
	init() {
		this._super(...arguments);
		this.mockData();
	}
});
