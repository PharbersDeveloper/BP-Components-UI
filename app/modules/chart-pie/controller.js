import Controller from '@ember/controller';

export default Controller.extend({
	mockData() {
		let that = this,
			pieData = that.get('pieData'),
			pieOption = null;

		pieOption = {
			color: ['#4f81bd', '#dc853e', '#93a9ce', '#d09493', '#b8cd97',
				'#a99bbd', '#92c3d5', '#4672a8', '#ab4744', '#8aa64f'],
			title: {
				text: 'Profile of Lilly Products in CHPA',
				x: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			// legend: {
			// 	orient: 'vertical',
			// 	y: 'center',
			// 	right: '10%',
			// 	data: ['MNC', 'Local', 'Lilly'],
			// 	selectedMode: false,
			// 	tooltip: {
			// 		show: false
			// 	}
			// },
			series: [
				{
					name: 'Profile',
					type: 'pie',
					radius: '55%',
					center: ['50%', '60%'],
					data: pieData,
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		}
		that.set('pieOption', pieOption);
	},
	init() {
		this._super(...arguments);
		this.set('pieData', [
			{ value: 32.3, name: 'Lilly Insulin' },
			{ value: 9.0, name: 'Gemzar' },
			{ value: 8.4, name: 'Alimta' },
			{ value: 5.0, name: 'Prozac' },
			{ value: 6.0, name: 'Cymbalta' },
			{ value: 10.7, name: 'Zyprexa' },
			{ value: 2.0, name: 'Strattera' },
			{ value: 5.0, name: 'Coclor' },
			{ value: 19.5, name: 'Vancocin' },
			{ value: 1.9, name: 'Cialis' },
			{ value: 0.1, name: 'Evista' }
		]);
		this.mockData();
	},
});
