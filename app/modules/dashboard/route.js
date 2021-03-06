import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { hash } from 'rsvp';
import ENV from "bp-components-ui/config/environment";

// monitor 
let queryAddress = EmberObject.create({
    host: ENV.Host,
    port: ENV.Port,
    version: ENV.Version,
    db: ENV.DB
}),
dynamic = EmberObject.create({
    isDynamic: true,
    interval: 1000
}),
conditionData = function(size,type) {
    return {
        "model": "es",
        "query": {
            "search": {
                "size": size,
                "sort": ["-time.keyword"],
            }
        },
        "format": [
            {
                "class": "pivot",
                "args": {
                    "yAxis": "%2Btime",
                    "xAxis": "hostname",
                    "value": type	// cpu / receive / transmit / disk / memory
                }
            }
        ]
    }
};

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
								id: 'demoline1',
								condition: {
									"_source": [
										"department",
										"count"
									],
									"sort": [
										{ "count": "asc" }
									]
								},
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
			rightLegendConfig: EmberObject.create({
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
								id: 'line2',
								condition: {
									"_source": [
										"department",
										"count"
									],
									"sort": [
										{ "count": "asc" }
									]
								},
								// toolbox: {
								// 	show: true,
								// 	feature: {
								// 		dataZoom: {
								// 			yAxisIndex: 'none'
								// 		},
								// 		dataView: { readOnly: false },
								// 		magicType: { type: ['line', 'bar'] },
								// 		restore: {},
								// 		saveAsImage: {}
								// 	}
								// },
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
									x: 'right',
									y: 'middle',
									orient: 'vertical',//'horizontal' 'vertical'

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
					condition: {
						"_source": [
							"department",
							"count"
						],
						"sort": [
							{ "count": "asc" }
						]
					},
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
				id: 'row4',
				height: 380,
				panels: A([{
					name: 'chart"s name',
					id: 'radar1',
					condition: {
						"_source": [
							"department",
							"count"
						],
						"sort": [
							{ "count": "asc" }
						]
					},
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
				id: 'row5',
				height: 300,
				panels: A([
					{
						name: 'chart"s circle',
						id: 'circle1',
						condition: {
							"_source": [
								"department",
								"count"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						tooltip: {
							show: true,
							trigger: 'item',
							// formatter: "{a} <br/>{b} : {c} ({d}%)"
							// axisPointer: { // 坐标轴指示器，坐标轴触发有效
							// 	type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							// },
							// backgroundColor: 'rgba(9,30,66,0.54)'
						},
						legend: {
							show: false,
							x: 'right',
							y: 'middle',
							orient: 'vertical'
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['60%', '75%'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							// label: {
							// 	normal: {
							// 		show: false,
							// 		position: 'center'
							// 	},
							// },
							// emphasis: {
							// 	label: {
							// 		show: true,
							// 		textStyle: {
							// 			fontSize: '14',
							// 			fontWeight: 'normal'
							// 		},
							// 		formatter: '{b}: {d}'
							// 	}
							// },
							// labelLine: {
							// 	normal: {
							// 		show: false
							// 	}
							// },
						}]
					}
				])
			},
			doubleCircle: {
				id: 'row6',
				height: 300,
				panels: A([
					{
						name: 'chart"s double circle',
						id: 'doubleCircle1',
						condition: {
							"_source": [
								"department",
								"count"
							],
							"sort": [
								{ "count": "asc" }
							],
							"query": {
								"bool": {
									"filter": [
										{
											"range": {
												"count": {
													"gte": "2"
												}
											}
										}
									]
								}
							}
						},
						tooltip: {
							show: true,
							trigger: 'item',
							// axisPointer: { // 坐标轴指示器，坐标轴触发有效
							// 	type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							// },
							// backgroundColor: 'rgba(9,30,66,0.54)'
						},
						legend: {
							show: true,
							x: 'center',
							y: 'bottom',
							// orient: 'vertical'
						},
						series: [{
							type: 'pie',
							radius: [0, 90],
							center: ['25%', '50%'],
							legendHoverLink: false,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							// encode: {
							// 	itemName: 'department',
							// 	value: 1,
							// }
						}, {
							type: 'pie',
							radius: [0, 90],
							center: ['75%', '50%'],
							legendHoverLink: false,
							label: {
								normal: {
									show: false
								},
								emphasis: {
									show: false
								}
							},
							// encode: {
							// 	itemName: 'department',
							// 	value: 2,
							// }
						}]
					}
				])
			},
			barLine: {
				id: 'row7',
				height: 600,
				panels: A([
					{
						id: 'barline',
						condition: {
							"_source": [
								"department",
								"count"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						color: ['#579AFF ', '#C2DAFF', '#FFAB00'],
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
						yAxis: [
							{
								type: 'value',
								show: true,
								min: 0,
								// max: yAxisRightMax,
								// interval: 50,
								axisLabel: {
									color: '#7A869A',
									// 		formatter: function (value) {
									// 			let formatValue = formatNumber(value);

									// 			return `${numberUnit}${formatValue}`;
									// 		}
								},
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLine: {
									show: false,
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							},
							{
								type: 'value',
								name: '',
								min: 0,
								// max: yAxisLeftMax,
								// interval: 6,
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLabel: {
									color: '#7A869A',
									// 		formatter: `{value}${rateUnit}`
								},
								axisLine: {
									show: false,
									type: 'solid',
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: false,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							}
						],
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
							y: 'bottom',
							orient: 'horizontal',
							textStyle: {
								fontSize: 14,
								color: '#7A869A'
							}
						},
						series: [{
							type: 'bar',
							seriesLayoutBy: 'row',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							}
						}, {
							type: 'bar',
							seriesLayoutBy: 'row',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							}
						}, {
							type: 'line',
							seriesLayoutBy: 'row',
							yAxisIndex: 1,
							itemStyle: {
								normal: {
									label: {
										show: true,
										position: 'top',
										// 			formatter: function (params) {
										// 				return `${params.value} ${rateUnit}`;
										// 			}
									}
								}
							}
						}]
					}
				])
			},
			barStack: {
				id: 'row8',
				height: 600,
				panels: A([{
					id: 'stackbar1',
					condition: {
						"_source": [
							"department",
							"count"
						],
						"sort": [
							{ "count": "asc" }
						]
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						type: 'scroll',
						orient: 'vertical',
						itemWidth: 8,
						itemHeight: 8,
						x: 'right',
						y: 'center',
						padding: 5,
						icon: 'circle',
					},
					xAxis: {
						type: 'category',
						splitLine: {
							show: false
						},
						axisLabel: {
							color: '#7A869A'
						},
						axisLine: {
							show: true,
							lineStyle: {
								type: 'solid',
								color: '#DFE1E6'
							}
						}
					},
					yAxis: {
						splitLine: {
							lineStyle: {
								type: 'dotted'
							}
						},
						axisLabel: {
							color: '#7A869A'
						},
						axisLine: {
							show: true,
							lineStyle: {
								type: 'dotted',
								color: '#DFE1E6'
							}
						}
					},
					series: [{
						seriesLayoutBy: 'row',
						type: 'bar',
						barWidth: 24,
						stack: 'stack',
						name: 'prodA',
						encode: {
							x: 0,
							y: 'prodA'
						}
					}, {
						seriesLayoutBy: 'row',
						type: 'bar',
						barWidth: 24,
						stack: 'stack',
						name: 'prodB',
						encode: {
							x: 0,
							y: 'prodB'
						}
					}, {
						seriesLayoutBy: 'row',
						type: 'bar',
						barWidth: 24,
						stack: 'stack',
						name: 'prodC',
						encode: {
							x: 0,
							y: 'prodC'
						}
					}, {
						seriesLayoutBy: 'row',
						type: 'bar',
						barWidth: 24,
						stack: 'stack',
						name: 'prodD',
						encode: {
							x: 0,
							y: 'prodD'
						}
					}]
				}])
			},
			monitoring: {
				id: 'rowId',
				height: 305,
				panels: A([{
					id: 'chartId',
					// animation: false,
					grid: {
						left: 36,
						right: 36,
						top: 32,
						bottom:24
					},
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
						min: 0,
						max: 100,
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
						symbol: 'none',  //这句就是去掉点的  
						smooth: true
					}, {
						type: 'line',
						symbol: 'none',  //这句就是去掉点的  
						smooth: true
					}]
				}])
			},
			monitoringCondition: [{
				queryAddress: {
					host: 'http://192.168.100.174',
					port: 9001,
					version: 'v1.0',
					db: 'DL'
				},
				dynamic: {
					isDynamic: true,
					interval: 1000
				},
				data: {
					"model": "es",
					"query": {
						"search": {
							"size": 70,
							"sort": ["-time.keyword"],
						}
					},
					"format": [
						{
							"class": "pivot",
							"args": {
								"yAxis": "time",
								"xAxis": "hostname",
								"value": "cpu"	// cpu / receive / transmit / disk / memory
							}
						}
					]
				}
			}],
			monitoringConditionCPU: A([{
				queryAddress,
				dynamic,
				data: conditionData(1000,'cpu')
			}]),
			tmProductCircle0: {
				id: 'circleproductcontainer0',
				height: 168,
				panels: A([
					{
						name: 'tmcircleproduct0',
						id: 'tmcircleproduct0',
						color: ['#73ABFF', '#FFC400', '#57D9A3'],
						condition: {
							"_source": [
								"product",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['50', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}
						}]
					}
				])
			},
			tmProductCircle1: {
				id: 'circleproductcontainer1',
				height: 168,
				panels: A([
					{
						name: 'tmcircleproduct1',
						id: 'tmcircleproduct1',
						color: ['#73ABFF', '#FFC400', '#57D9A3'],
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['50', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}

						}]
					}
				])
			},
			tmProductCircle0Condition: [{
				dynamic: {
					isDynamic: false,
				},
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								[
									"eq",
									"date.keyword",
									"2018Q1"
								]
							]
						},
						"aggs": [
							{
								"groupBy": "date.keyword",
								"aggs": [
									{
										"groupBy": "product.keyword",
										"aggs": [
											{
												"agg": "sum",
												"field": "sales"
											}
										]
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": ["sum(sales)"]
						},
						{
							"class": "cut2DArray",
							"args": [
								"product.keyword",
								"sum(sales)",
								"date.keyword",
								"rate(sum(sales))"
							]
						}
					]
				}
			}],
			tmProductBarLine0: {
				id: 'tmProductBarLineContainer',
				height: 305,
				panels: A([
					{
						id: 'bartmProductBarLine0',
						color: ['#579AFF ', '#C2DAFF', '#FFAB00'],
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
						yAxis: [
							{
								type: 'value',
								show: true,
								min: 0,
								axisLabel: {
									color: '#7A869A',
									// formatter: '¥ {value}'
								},
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLine: {
									show: false,
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							},
							{
								type: 'value',
								name: '',
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLabel: {
									color: '#7A869A',
									// 		formatter: `{value}${rateUnit}`
								},
								axisLine: {
									show: false,
									type: 'solid',
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: false,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							}
						],
						tooltip: {
							show: true,
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							},
							backgroundColor: 'rgba(9,30,66,0.54)'
						},
						legend: {
							icon: 'circle',
							show: true,
							x: 'center',
							y: 'bottom',
							orient: 'horizontal',
							textStyle: {
								fontSize: 14,
								color: '#7A869A'
							}
						},
						series: [{
							type: 'bar',
							name: '销售额',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: [1]
							}
						}, {
							type: 'bar',
							name: '指标',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: [2]
							}
						}, {
							type: 'line',
							name: '指标达成率',
							yAxisIndex: 1,
							encode: {
								y: [3]
							},
							itemStyle: {
								normal: {
									label: {
										show: true,
										position: 'top',
										// 			formatter: function (params) {
										// 				return `${params.value} ${rateUnit}`;
										// 			}
									}
								}
							},

						}]
					}
				])
			},
			tmProductBarLineCondition: [{
				dynamic: {
					isDynamic: false,
					interval: 3000
				},
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "product.keyword", "大扶康"]
							]
						},
						"aggs": [
							{
								"groupBy": "date.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									},
									{
										"agg": "sum",
										"field": "p_quota"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(p_quota)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "product",
									"value": "大扶康"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"date.keyword",
								"sum(sales)",
								"sum(p_quota)",
								"rate(sum(p_quota))",
								"product"
							]
						}
					]
				}
			}],
			tmRegionCircle0: {
				id: 'regionCircleContainer0',
				height: 168,
				panels: [
					{
						name: 'tmcircleregion0',
						id: 'tmcircleregion0',
						color: ['#73ABFF', '#FFC400', '#57D9A3'],
						condition: {
							"_source": [
								"region",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['44', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}
						}]
					}
				]
			},
			tmRegionCircle1: {
				id: 'circleRegionContainer1',
				height: 168,
				panels: [
					{
						name: 'tmcircleregion1',
						id: 'tmcircleregion1',
						condition: {
							"_source": [
								"region",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						color: ['#73ABFF', '#FFC400', '#57D9A3'],
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['44', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}

						}]
					}
				]
			},
			tmRegionCircleCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "date.keyword", "2018Q1"]
							]
						},
						"aggs": [
							{
								"groupBy": "hospital.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(sales)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "date",
									"value": "2018Q1"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"hospital.keyword",
								"sum(sales)",
								"date",
								"rate(sum(sales))"
							]
						}
					]
				}
			}],
			tmRegionBarLine0: {
				id: 'tmRegionBarLineContainer',
				height: 305,
				panels: [
					{
						id: 'bartmRegionBarLine0',
						color: ['#579AFF ', '#C2DAFF', '#FFAB00'],
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
						yAxis: [
							{
								type: 'value',
								show: true,
								min: 0,
								axisLabel: {
									color: '#7A869A',
									// formatter: '¥ {value}'
								},
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLine: {
									show: false,
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							},
							{
								type: 'value',
								name: '',
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLabel: {
									color: '#7A869A',
									// 		formatter: `{value}${rateUnit}`
								},
								axisLine: {
									show: false,
									type: 'solid',
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: false,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							}
						],
						tooltip: {
							show: true,
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							},
							backgroundColor: 'rgba(9,30,66,0.54)'
						},
						legend: {
							icon: 'circle',
							show: true,
							x: 'center',
							y: 'bottom',
							orient: 'horizontal',
							textStyle: {
								fontSize: 14,
								color: '#7A869A'
							}
						},
						series: [{
							type: 'bar',
							name: '销售额',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: 'sales'
							}
						}, {
							type: 'bar',
							name: '指标',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: 'target'
							}
						}, {
							type: 'line',
							name: '指标达成率',
							yAxisIndex: 1,
							encode: {
								y: 'targetRate'
							},
							itemStyle: {
								normal: {
									label: {
										show: true,
										position: 'top',
										// 			formatter: function (params) {
										// 				return `${params.value} ${rateUnit}`;
										// 			}
									}
								}
							},

						}]
					}
				]
			},
			tmRegionBarLineCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "product.keyword", "大扶康"],
								["eq", "hospital.keyword", "西河医院"]
							]
						},
						"aggs": [
							{
								"groupBy": "date.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									},
									{
										"agg": "sum",
										"field": "p_quota"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(p_quota)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "product",
									"value": "大扶康"
								},
								{
									"name": "hospital",
									"value": "西河医院"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"date.keyword",
								"sum(sales)",
								"sum(p_quota)",
								"rate(sum(p_quota))",
								"product",
								"hospital"
							]
						}
					]
				}
			}],
			tmRepresentativeCircle0: {
				id: 'representativeCircleContainer0',
				height: 168,
				panels: [
					{
						name: 'tmcircleRepresentative0',
						id: 'tmcirclerepresentative0',
						color: ['#73ABFF', '#FFC400', '#57D9A3', '#79E2F2', '#FF8F73', '#998DD9'],
						condition: {
							"_source": [
								"representative",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['44', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}
						}]
					}
				]
			},
			tmRepresentativeCircle1: {
				id: 'circleRepresentativeContainer1',
				height: 168,
				panels: [
					{
						name: 'tmcirclerepresentative1',
						id: 'tmcirclerepresentative1',
						condition: {
							"_source": [
								"representative",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						color: ['#73ABFF', '#FFC400', '#57D9A3', '#79E2F2', '#FF8F73', '#998DD9'],
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['44', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}

						}]
					}
				]
			},
			tmRepresentativeCircleCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "date.keyword", "2018Q1"]
							]
						},
						"aggs": [
							{
								"groupBy": "representative.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									},
									{
										"agg": "sum",
										"field": "p_quota"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(sales)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "date",
									"value": "2018Q1"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"representative.keyword",
								"sum(sales)",
								"date",
								"rate(sum(sales))"
							]
						}
					]
				}
			}],
			tmRepresentativeBarLine0: {
				id: 'tmRepresentativeBarLineContainer',
				height: 305,
				panels: [
					{
						id: 'bartmRepresentativeBarLine0',
						condition: {
							"_source": [
								"date",
								"sales",
								"target",
								"targetRate",
								"product",
								"representative"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						color: ['#579AFF ', '#C2DAFF', '#FFAB00'],
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
						yAxis: [
							{
								type: 'value',
								show: true,
								min: 0,
								axisLabel: {
									color: '#7A869A',
									// formatter: '¥ {value}'
								},
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLine: {
									show: false,
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							},
							{
								type: 'value',
								name: '',
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLabel: {
									color: '#7A869A',
									// 		formatter: `{value}${rateUnit}`
								},
								axisLine: {
									show: false,
									type: 'solid',
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: false,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							}
						],
						tooltip: {
							show: true,
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							},
							backgroundColor: 'rgba(9,30,66,0.54)'
						},
						legend: {
							icon: 'circle',
							show: true,
							x: 'center',
							y: 'bottom',
							orient: 'horizontal',
							textStyle: {
								fontSize: 14,
								color: '#7A869A'
							}
						},
						series: [{
							type: 'bar',
							name: '销售额',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: 'sales'
							}
						}, {
							type: 'bar',
							name: '指标',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: 'target'
							}
						}, {
							type: 'line',
							name: '指标达成率',
							yAxisIndex: 1,
							encode: {
								y: 'targetRate'
							},
							itemStyle: {
								normal: {
									label: {
										show: true,
										position: 'top',
										// 			formatter: function (params) {
										// 				return `${params.value} ${rateUnit}`;
										// 			}
									}
								}
							},

						}]
					}
				]
			},
			tmRepresentativeBarLineCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "representative.keyword", "小兰"]
							]
						},
						"aggs": [
							{
								"groupBy": "date.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									},
									{
										"agg": "sum",
										"field": "p_quota"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(p_quota)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "product",
									"value": "all"
								},
								{
									"name": "representative",
									"value": "小兰"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"date.keyword",
								"sum(sales)",
								"sum(p_quota)",
								"rate(sum(p_quota))",
								"product",
								"representative"
							]
						}
					]
				}
			}],
			tmHospitalCircle0: {
				id: 'hospitalCircleContainer0',
				height: 168,
				panels: [
					{
						name: 'tmcircleHospital0',
						id: 'tmcircleHospital0',
						color: ['#73ABFF', '#FFC400', '#57D9A3', '#79E2F2', '#FF8F73', '#998DD9'],
						condition: {
							"_source": [
								"hospitalLevel",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['44', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}
						}]
					}
				]
			},
			tmHospitalCircle1: {
				id: 'circleHospitalContainer1',
				height: 168,
				panels: [
					{
						name: 'tmcirclehospital1',
						id: 'tmcirclehospital1',
						condition: {
							"_source": [
								"hospitalLevel",
								"sales",
								"date",
								"rate"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						color: ['#73ABFF', '#FFC400', '#57D9A3', '#79E2F2'],
						tooltip: {
							show: true,
							trigger: 'item',
						},
						legend: {
							show: false,
						},
						series: [{
							name: '',
							type: 'pie',
							radius: ['44', '64'],
							avoidLabelOverlap: false,
							hoverOffset: 3,
							labelLine: {
								normal: {
									show: true
								}
							},
							label: {
								color: '#7A869A',
								formatter: '{b}  {d}%'
							}

						}]
					}
				]
			},
			tmHospitalCircleCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "date.keyword", "2018Q1"]
							]
						},
						"aggs": [
							{
								"groupBy": "hospital_level.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(sales)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "date",
									"value": "2018Q1"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"hospital_level.keyword",
								"sum(sales)",
								"date",
								"rate(sum(sales))"
							]
						}
					]
				}
			}],
			tmHospitalBarLine0: {
				id: 'tmHospitalBarLineContainer',
				height: 305,
				panels: [
					{
						id: 'bartmHospitalBarLine0',
						condition: {
							"_source": [
								"date",
								"sales",
								"target",
								"targetRate",
								"product",
								"hospital"
							],
							"sort": [
								{ "count": "asc" }
							]
						},
						color: ['#579AFF ', '#C2DAFF', '#FFAB00'],
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
						yAxis: [
							{
								type: 'value',
								show: true,
								min: 0,
								axisLabel: {
									color: '#7A869A',
									// formatter: '¥ {value}'
								},
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLine: {
									show: false,
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							},
							{
								type: 'value',
								name: '',
								axisTick: {
									show: false,
									alignWithLabel: true
								},
								axisLabel: {
									color: '#7A869A',
									// 		formatter: `{value}${rateUnit}`
								},
								axisLine: {
									show: false,
									type: 'solid',
									lineStyle: {
										type: 'solid',
										color: '#EBECF0'
									}
								},
								splitLine: {
									show: false,
									lineStyle: {
										color: '#D2D4D9',
										width: 1,
										type: 'dashed'
									}
								}
							}
						],
						tooltip: {
							show: true,
							trigger: 'axis',
							axisPointer: { // 坐标轴指示器，坐标轴触发有效
								type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
							},
							backgroundColor: 'rgba(9,30,66,0.54)'
						},
						legend: {
							icon: 'circle',
							show: true,
							x: 'center',
							y: 'bottom',
							orient: 'horizontal',
							textStyle: {
								fontSize: 14,
								color: '#7A869A'
							}
						},
						series: [{
							type: 'bar',
							name: '销售额',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: 'sales'
							}
						}, {
							type: 'bar',
							name: '指标',
							yAxisIndex: 0,
							barWidth: '12px',
							itemStyle: {
								barBorderRadius: [0, 0, 0, 0]
							},
							encode: {
								y: 'target'
							}
						}, {
							type: 'line',
							name: '指标达成率',
							yAxisIndex: 1,
							encode: {
								y: 'targetRate'
							},
							itemStyle: {
								normal: {
									label: {
										show: true,
										position: 'top',
										// 			formatter: function (params) {
										// 				return `${params.value} ${rateUnit}`;
										// 			}
									}
								}
							},

						}]
					}
				]
			},
			tmHospitalBarLineCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"and": [
								["eq", "hospital.keyword", "海港医院"]
							]
						},
						"aggs": [
							{
								"groupBy": "date.keyword",
								"aggs": [
									{
										"agg": "sum",
										"field": "sales"
									},
									{
										"agg": "sum",
										"field": "p_quota"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "calcRate",
							"args": [
								"sum(p_quota)"
							]
						},
						{
							"class": "addCol",
							"args": [
								{
									"name": "product",
									"value": "all"
								},
								{
									"name": "hospital",
									"value": "海港医院"
								}
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"date.keyword",
								"sum(sales)",
								"sum(p_quota)",
								"rate(sum(p_quota))",
								"product",
								"hospital"
							]
						}
					]
				}
			}],
			tmProdsLines: {
				id: 'tmProdsLinesContainer',
				height: 305,
				panels: [{
					id: 'demoline1',
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
						// 	seriesLayoutBy: 'row'
					}, {
						type: 'line',
						// 	seriesLayoutBy: 'row'
					}, {
						type: 'line',
						// 	seriesLayoutBy: 'row'
					}, {
						type: 'line',
						// 	seriesLayoutBy: 'row'
					}]
				}]
			},
			tmProdsLinesCondition: [{
				queryAddress: {
					host: 'http://192.168.100.174',
					port: 9001,
					version: 'v1.0',
					db: 'DL'
				},
				data: {
					"model": "oldtm",
					"query": {
						"aggs": [
							{
								"groupBy": "date.keyword",
								"aggs": [
									{
										"groupBy": "product.keyword",
										"aggs": [
											{
												"agg": "sum",
												"field": "sales"
											}
										]
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "pivot",
							"args": {
								"yAxis": "date.keyword",
								"xAxis": "product.keyword",
								"value": "sum(sales)"
							}
						}
					]
				}
			}],
			tmRadar: {
				id: 'tmRadar01',
				height: 356,
				panels: [{
					name: 'chart"s name',
					id: 'tmRadaro1',
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
							{ text: '产品知识', max: 10 },
							{ text: '工作积极性', max: 10 },
							{ text: '行为有效性', max: 10 },
							{ text: '区域管理能力', max: 10 },
							{ text: '销售知识', max: 10 }
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

				}]
			},
			tmRadarCondition: [{
				data: {
					"model": "oldtm",
					"query": {
						"search": {
							"size": 2,
							"and": [
								["eq", "date.keyword", "2018Q1"]
							]
						},
						"aggs": [
							{
								"groupBy": "representative.keyword",
								"aggs": [
									{
										"agg": "max",
										"field": "p_product_knowledge"
									},
									{
										"agg": "max",
										"field": "p_work_motivation"
									},
									{
										"agg": "max",
										"field": "p_behavior_efficiency"
									},
									{
										"agg": "max",
										"field": "p_territory_management_ability"
									},
									{
										"agg": "max",
										"field": "p_sales_skills"
									}
								]
							}
						]
					},
					"format": [
						{
							"class": "addAvgRow",
							"args": ["representative.keyword"]
						},
						{
							"class": "filter",
							"args": [
								["or", [
									["eq", "representative.keyword", "小兰"],
									["eq", "representative.keyword", "平均值"]
								]]
							]
						},
						{
							"class": "cut2DArray",
							"args": [
								"representative.keyword",
								"max(p_product_knowledge)",
								"max(p_work_motivation)",
								"max(p_behavior_efficiency)",
								"max(p_territory_management_ability)",
								"max(p_sales_skills)"
							]
						}
					]
				}
			}
			],
			tmTable: {
				id: 'tmProductTable1',
				height: 0,
				panels: A([
					{
						type: 'table',
						
					}
				])
			},
		});
	}
});