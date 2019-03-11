import Controller from '@ember/controller';

export default Controller.extend({
	mockData() {
		let that = this,
			barData = that.get('barData').sort((a, b) => {
				return b.value - a.value
			}),
			barOption = null,
			xAxisData = that.genBarData(barData, 'prodName'),
			data = that.genBarData(barData, 'value'),

			colorList = barData.map(ele => {
				if (ele.type === 'MNC') {
					return '#0070c0';
				} else if (ele.type === 'Local') {
					return '#c4bd97';
				} else {
					return '#ff0000';
				}
			});

		barOption = {
			color: ['#0070c0', '#c4bd97', '#ff0000'],
			title: {
				text: 'RMB SOM Ranking-Total Market by MAT 2018 Sep',
				left: 'center'
			},
			xAxis: {
				type: 'category',
				data: xAxisData,
				axisLabel: {
					interval: 0,
					rotate: 40
				}
			},
			yAxis: {},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				orient: 'vertical',
				y: 'center',
				right: '10%',
				data: ['MNC', 'Local', 'Lilly'],
				selectedMode: false,
				tooltip: {
					show: false
				}
			},
			series: [{
				name: '',
				barWidth: '70%',
				type: 'bar',
				itemStyle: {
					normal: {
						color: function (params) {
							return colorList[params.dataIndex]
						},
					}
				},
				data: data
			},
			{
				name: 'MNC',
				type: 'bar',
				stack: '',
				barWidth: 0,

				data: 0
			},
			{
				name: 'Local',
				type: 'bar',
				stack: '',
				barWidth: 0,

				data: 0
			},
			{
				name: 'Lilly',
				type: 'bar',
				stack: '',
				barWidth: 0,

				data: 0
			},]
		}
		that.set('barOption', barOption);
	},
	init() {
		this._super(...arguments);
		this.set('barData', [
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
		]);
		this.mockData();

	},
	genBarData(data, key) {
		return data.map(ele => {
			return ele[key]
		})
	}
});
