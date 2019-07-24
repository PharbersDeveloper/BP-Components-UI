import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
		return hash({
			config: EmberObject.create({
				id: 0,
				uid: 'other',
				time: {
					from: 1563393611323,
					to: 1563415211323
				},
				rows: A([
					{
						height: 400,
						panels: A([
							{
								id: 'line1',
								xAxis: {
									show: true,
									type: 'category',
									name: '',
									axisTick: {
										show: true,
										alignWithLabel: true
									},
									axisLine: {
										show: true,
										lineStyle: {
											type: 'dotted',
											color: '#DFE1E6'
										}
									},
									axisLabel: {
										show: true,
										color: '#7A869A',
										fontSize: 14,
										lineHeight: 20
									}
								},
								yAxis: {
									show: true,
									type: 'value',
									axisLine: {
										show: false
									},
									axisTick: {
										show: false
									},
									axisLabel: {
										show: true,
										color: '#7A869A',
										// formatter: function (value) {
										// 	return value * 100 + axisConfig.unit;
										// }
									},
									splitLine: {
										show: true,
										lineStyle: {
											type: 'dotted',
											color: '#DFE1E6'
										}
									}
								},
								tooltip: {
									show: true,
									trigger: 'axis',
									axisPointer: { // 坐标轴指示器，坐标轴触发有效
										type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
									},
									backgroundColor: 'rgba(9,30,66,0.54)'
								},
								legend: {
									show: true,
									x: 'center',
									y: 'top',
									orient: 'horizontal',
									textStyle: {
										fontSize: 14,
										color: '#7A869A'
									}
								},
								series: [{
									type: 'line',
									seriesLayoutBy: 'row'
								}, {
									type: 'line',
									seriesLayoutBy: 'row'
								}, {
									type: 'line',
									seriesLayoutBy: 'row'
								}, {
									type: 'line',
									seriesLayoutBy: 'row'
								}]
							}
						])
					}
				])
			}),
			data: null,
			rowConfigs: A([{
				height: 400,
				panels: A([{
					id: 2,
					color: A(['#73ABFF', '#2355A9', '#FFC400', '#5799ff']),
					xAxis: {
						// show: true,
						// type: 'category',
						// name: '',
						// axisTickShow: true,
						// axisLineShow: true,
						// axisLabelShow: true,
						show: true,
						type: 'category',
						name: '',
						axisTick: {
							show: true,
							alignWithLabel: true
						},
						axisLine: {
							show: true,
							lineStyle: {
								type: 'dotted',
								color: '#DFE1E6'
							}
						},
						axisLabel: {
							show: true,
							color: '#7A869A',
							fontSize: 14,
							lineHeight: 20
						}
					},
					yAxis: {
						show: true,
						type: 'value',
						axisLine: {
							show: false
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: true,
							color: '#7A869A',
							// formatter: function (value) {
							// 	return value * 100 + axisConfig.unit;
							// }
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: 'dotted',
								color: '#DFE1E6'
							}
						}

					},
					tooltip: {
						show: true,
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						},
						backgroundColor: 'rgba(9,30,66,0.54)'
					},
					legend: {
						show: false,
						x: 'left',
						y: 'bottom'
					},
					series: [
						{
							type: 'bar',
							seriesLayoutBy: 'row',
							encode: {
								y: 3,
								seriesName: [3],
							},
							barWidth: '8px',
							itemStyle: {
								barBorderRadius: [5, 5, 0, 0]
							}
						}
					]
				}
				])
			}]),
			radar: {
				height: 380,
				panels: A([{
					name: 'chart"s name',
					id: 'radar1',
					tooltip: {
						show: true,
						trigger: 'item',
					},
					color: ['#3172E0', '#979797'],
					legend: {
						show: true,
						x: 'center',
						y: 'bottom',
						orient: 'vertical'
					},
					radar: {
						radius: '65%',
						name: {
							textStyle: {
								color: '#7A869A',
								borderRadius: 3,
								padding: [0, 0]
							}
						},
						indicator: [
							{ text: '2018年第一季度', max: 1 },
							{ text: '2018年第二季度', max: 1 },
							{ text: '2018年第三季度', max: 1 },
							{ text: '2018年第四季度', max: 1 },
							{ text: '2019年第一季度', max: 1 }
						],
						splitNumber: 5, //default
						axisLine: {
							lineStyle: {
								color: '#DFE1E6'
							}
						},
						splitLine: {
							lineStyle: {
								color: '#DFE1E6'
							}
						},
						splitArea: {
							areaStyle: {
								color: ['#fff', '#fff']
							}
						}
					},
					series: [{
						name: '',
						type: 'radar',
						areaStyle: {
							opacity: 0.3
						},
						encode: {
							itemName: 0,
							value: 0
						}
					}]
				}])
			},
			circle: {
				height: 300,
				panels: A([
					{
						name: 'chart"s circle',
						id: 'circle1',
						// line: false,
						// bar: false,
						// pie: true,
						// radar: false,
						// stack: false,
						// scatter: false,
						tooltip: {
							show: true,
							trigger: 'item',
							// axisPointer: { // 坐标轴指示器，坐标轴触发有效
							// 	type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							// },
							// backgroundColor: 'rgba(9,30,66,0.54)'
						},
						// pieConfig: {
						// 	radius: '65%'
						// },
						legend: {
							show: true,
							x: 'center',
							y: 'top',
							// orient: 'vertical'
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['60%', '75%'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							label: {
								normal: {
									show: false,
									position: 'center'
								},
							},
							emphasis: {
								label: {
									show: true,
									textStyle: {
										fontSize: '14',
										fontWeight: 'normal'
									},
									formatter: '{b}: {d}'
								}
							},

							labelLine: {
								normal: {
									show: false
								}
							},
							// 			encode: {
							// 			   radius: 3,
							//                 angle: 2
							// 			}
						}]
						// pieConfigs: A([
						// 	{
						// 		insideRadius: '60%',
						// 		outsideRadius: '95%',
						// 		avoidLabelOverlap: false,
						// 		hoverOffset: 3, // 高亮扇区的偏移距离
						// 		label: {
						// 			normal: {
						// 				show: false,
						// 				position: 'center', // 'outside'/'inside'/'center'
						// 			},
						// 			emphasis: {
						// 				show: true
						// 			}
						// 		}
						// 	}
						// ])
					}
				])
			},
			// time 不应该放入这里面，应该由某一个时间选择器选择的值
			time: {
				from: 1514736000000,
				to: 1543593600000
			},
		})
	}
});
