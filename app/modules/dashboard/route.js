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
								id: 1,
								line: true,
								bar: false,
								pie: false,
								stack: false,
								scatter: false,
								xaxis: {
									show: true,
									type: 'category',
									name: '',
									axisTickShow: true,
									axisLineShow: true,
									axisLabelShow: true
								},
								yaxis: {
									show: true,
									type: 'value',
									name: '',
									unit: '',
									formatType: 'rate',
									axisTickShow: false,
									axisLineShow: false,
									axisLabelShow: true
								},
								tooltip: {
									show: true
								},
								legend: {
									show: true,
									x: 'center',
									y: 'top'
								}
							}
						])
					}
				])
			}),
			data: null,
			rowConfigs: A([{
				height: 400,
				panels: A([
					{
						id: 2,
						line: false,
						bar: true,
						pie: false,
						stack: false,
						scatter: false,
						xaxis: {
							show: true,
							type: 'category',
							name: '',
							axisTickShow: true,
							axisLineShow: true,
							axisLabelShow: true
						},
						yaxis: {
							show: true,
							type: 'value',
							name: '',
							unit: '',
							axisTickShow: false,
							axisLineShow: false,
							axisLabelShow: true

						},
						tooltip: {
							show: false
						},
						legend: {
							show: true,
							x: 'left',
							y: 'bottom'
						}
					}
				])
			}]),
			// time 不应该放入这里面，应该由某一个时间选择器选择的值
			time: {
				from: 1514736000000,
				to: 1543593600000
			},
		})
	}
});
