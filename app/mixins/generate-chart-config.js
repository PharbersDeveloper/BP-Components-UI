import Mixin from "@ember/object/mixin"
import { A } from "@ember/array"
import { number2percent, number2thousand } from '../utils/number-format';

//TODO chart config应该放入线上数据库，现在没人放，先在本地生成
export default Mixin.create({
	generateCircleChart(rowId, chartId) {
		return {
			id: rowId,
			height: 168,
			panels: A([
				{
					name: "tmcircleproduct0",
					id: chartId,
					color: ["#73ABFF", "#79E2F2", "#57D9A3", "#FFC400", "#FF8F73", " #998DD9"],
					tooltip: {
						show: true,
						trigger: "item",
						formatter: function (param) {
							return param.marker + ' ' + param.name + ": " + number2thousand(param.value[1], 0)
						},
					},
					legend: {
						show: false
					},
					series: [{
						name: "",
						type: "pie",
						radius: ["50", "64"],
						avoidLabelOverlap: false,
						hoverOffset: 3,
						labelLine: {
							normal: {
								show: true
							}
						},
						label: {
							color: "#7A869A",
							formatter: "{b}  {d}%"
						}
					}]
				}
			])
		}
	},
	generateBarLineConfig(rowId, chartId) {
		return {
			id: rowId,
			height: 305,
			panels: A([
				{
					id: chartId,
					color: ["#579AFF ", "#C2DAFF", "#FFAB00"],
					grid: {
						top: 32
					},
					xAxis: {
						show: true,
						type: "category",
						name: "",
						formatType: "formatPhase",
						axisTick: {
							show: true,
							alignWithLabel: true
						},
						axisLine: {
							show: true,
							lineStyle: {
								type: "dotted",
								color: "#DFE1E6"
							}
						},
						axisLabel: {
							show: true,
							color: "#7A869A",
							fontSize: 14,
							lineHeight: 20
						}
					},
					yAxis: [
						{
							type: "value",
							show: true,
							min: 0,
							axisLabel: {
								color: "#7A869A"
								// formatter: '¥ {value}'
							},
							axisTick: {
								show: false,
								alignWithLabel: true
							},
							axisLine: {
								show: false,
								lineStyle: {
									type: "solid",
									color: "#EBECF0"
								}
							},
							splitLine: {
								show: true,
								lineStyle: {
									color: "#D2D4D9",
									width: 1,
									type: "dashed"
								}
							}
						},
						{
							type: "value",
							name: "",
							axisTick: {
								show: false,
								alignWithLabel: true
							},
							axisLabel: {
								color: "#7A869A",
								formatType: "formatRate"
							},
							axisLine: {
								show: false,
								type: "solid",
								lineStyle: {
									type: "solid",
									color: "#EBECF0"
								}
							},
							splitLine: {
								show: false,
								lineStyle: {
									color: "#D2D4D9",
									width: 1,
									type: "dashed"
								}
							}
						}
					],
					tooltip: {
						show: true,
						trigger: "axis",
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
						},
						formatter: function (params) {
							let title = `<h6>${params[0].axisValue}</h6>`,
								content = params.map(ele => {

									let value = ele.value[ele.seriesIndex + 1];

									if (ele.seriesIndex === params.length - 1) {
										value = number2percent(value, 1)
										return `<p>${ele.marker} ${ele.seriesName} ${value}%</p>`
									}
									value = number2thousand(value)
									return `<p>${ele.marker} ${ele.seriesName} ¥ ${value}</p>`
								});

							return title + content.join('')
						},
						backgroundColor: "rgba(9,30,66,0.54)"
					},
					legend: {
						icon: "circle",
						show: true,
						x: "center",
						y: "bottom",
						orient: "horizontal",
						textStyle: {
							fontSize: 14,
							color: "#7A869A"
						}
					},
					series: [{
						type: "bar",
						name: "销售额",
						yAxisIndex: 0,
						barWidth: "12px",
						itemStyle: {
							barBorderRadius: [0, 0, 0, 0]
						},
						encode: {
							y: [1]
						}
					}, {
						type: "bar",
						name: "指标",
						yAxisIndex: 0,
						barWidth: "12px",
						itemStyle: {
							barBorderRadius: [0, 0, 0, 0]
						},
						encode: {
							y: [2]
						}
					}, {
						type: "line",
						name: "指标达成率",
						yAxisIndex: 1,
						encode: {
							y: [3]
						},
						label: {
							show: true,
							position: "top",
							formatter: function (param) {
								let value = param.value[3];

								return number2percent(value, 1) + '%'
							}
						}
						// itemStyle: {
						// 	normal: {
						// 		label: {
						// 			show: true,
						// 			position: "top"
						// 			// 			formatter: function (params) {
						// 			// 				return `${params.value} ${rateUnit}`;
						// 			// 			}
						// 		}
						// 	}
						// }

					}]
				}
			])
		}
	},
	generateLines(rowId, chartId) {
		return {
			id: rowId,
			height: 305,
			panels: [{
				id: chartId,
				color: ["#57D9A3", "#FFE380", "#FF8B00", "#8777D9"],
				xAxis: {
					show: true,
					type: "category",
					formatType: "formatPhase",
					name: "",
					axisTick: {
						show: true,
						alignWithLabel: true
					},
					axisLine: {
						show: true,
						lineStyle: {
							type: "dotted",
							color: "#DFE1E6"
						}
					},
					axisLabel: {
						show: true,
						color: "#7A869A",
						fontSize: 14,
						lineHeight: 20
					}
				},
				yAxis: {
					show: true,
					type: "value",
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						show: true,
						color: "#7A869A",
						formatType: "formatRate"

						// formatter: function (value) {
						// 	return value * 100 + axisConfig.unit;
						// }
					},
					splitLine: {
						show: true,
						lineStyle: {
							type: "dotted",
							color: "#DFE1E6"
						}
					}
				},
				tooltip: {
					show: true,
					trigger: "axis",
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
					},
					formatter: function (params) {
						let title = `<h6>${params[0].axisValue}</h6>`,
							content = params.map(ele => {

								let value = ele.value[ele.seriesIndex + 1];

									value = number2percent(value, 1)
								return `<div>${ele.marker} ${ele.seriesName} ${value}%</div>`
								
							});

						return title + content.join('')
					},
					backgroundColor: "rgba(9,30,66,0.54)"
				},
				legend: {
					show: true,
					x: "center",
					y: "top",
					orient: "horizontal",
					textStyle: {
						fontSize: 14,
						color: "#7A869A"
					}
				},
				series: [{
					type: "line"
				}, {
					type: "line"
				}, {
					type: "line"
				}, {
					type: "line"
				}]
			}]
		}
	},
	generateRepRadar(rowId, chartId, max) {
		return {
			id: rowId,
			height: 356,
			panels: [{
				name: "member ability",
				id: chartId,
				tooltip: {
					show: true,
					trigger: "item"
				},
				color: ["#3172E0", "#979797"],
				legend: {
					show: true,
					x: "center",
					y: "bottom",
					orient: "vertical"
				},
				radar: {
					radius: "65%",
					name: {
						textStyle: {
							color: "#7A869A",
							borderRadius: 3,
							padding: [0, 0]
						}
					},
					indicator: [
						{ text: "产品知识", max: max || 10 },
						{ text: "工作积极性", max: max || 10 },
						{ text: "行为有效性", max: max || 10 },
						{ text: "区域管理能力", max: max || 10 },
						{ text: "销售知识", max: max || 10 }
					],
					splitNumber: 5, //default
					axisLine: {
						lineStyle: {
							color: "#DFE1E6"
						}
					},
					splitLine: {
						lineStyle: {
							color: "#DFE1E6"
						}
					},
					splitArea: {
						areaStyle: {
							color: ["#fff", "#fff"]
						}
					}
				},
				series: [{
					name: "",
					type: "radar",

					areaStyle: {
						opacity: 0.3
					},
					encode: {
						itemName: 0,
						value: 0
					}
				}]
			}]
		}
	},
	generateResultProductCircle(rowId, chartId) {
		return {
			id: rowId,
			height: 319,
			panels: [
				{
					name: "tmResultProducts",
					id: chartId,
					color: ["#73ABFF", "#FFC400", "#57D9A3"],
					tooltip: {
						show: true,
						trigger: "item"
					},
					legend: {
						show: false
					},
					series: [{
						name: "",
						type: "pie",
						radius: ["70", "100"],
						avoidLabelOverlap: false,
						hoverOffset: 3,
						labelLine: {
							normal: {
								show: true
							}
						},
						label: {
							color: "#7A869A",
							formatter: "{b}  {d}%"
						}
					}]
				}
			]
		}
	}
})
