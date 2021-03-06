import Mixin from "@ember/object/mixin"
import { isEmpty } from "@ember/utils"
// import { inject as service } from "@ember/service"
import ENV from "bp-components-ui/config/environment"

export default Mixin.create( {
	// runtimeConfig: service( "service/runtime-config" ),
	queryAddress: ENV.QueryAddress,
	jobId: "c1d1889d-30e4-429b-b073-9c5e93128dbf",
	getJobId() {
		let jobId = ""

		if ( ENV.environment === "development" && isEmpty( window.localStorage.getItem( "jobId" ) ) ) {
			jobId = this.jobId
		} else {
			jobId = window.localStorage.getItem( "jobId" )
			this.set( "jobId", jobId )
		}
		return jobId
	},
	generateProductCircleCondition( proposalCase, phase ) {

		let searchRuls = [],
			jobId = this.getJobId()

		if ( proposalCase === "tm" ) {
			searchRuls = [
				["eq", "category", "Product"],
				["eq", "phase", phase],
				["eq", "job_id.keyword", jobId]
			]
		} else {
			searchRuls = [
				["eq", "category", "Product"],
				["eq", "phase", phase],
				["eq", "job_id.keyword", jobId],
				["eq", "status.keyword", "已开发"]
			]
		}
		return [{
			queryAddress: this.queryAddress,
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": searchRuls
					},
					"aggs": [
						{
							"groupBy": "phase",
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
							"phase",
							"rate(sum(sales))"
						]
					}
				]
			}
		}]
	},
	generateProdBarLineCondition( productName, proposal ) {
		let searchRuls = [],
			agg = {},
			jobId = this.getJobId()

		if ( isEmpty( productName ) ) {
			searchRuls = [
				["eq", "category", "Product"],
				["eq", "job_id.keyword", jobId]
			]
			agg = [
				{
					"agg": "sum",
					"field": "sales"
				},
				{
					"agg": "sum",
					"field": "quota"
				}
			]
		} else {
			searchRuls = [
				["eq", "category", "Product"],
				["eq", "product.keyword", productName],
				["eq", "job_id.keyword", jobId]
			]
			agg = [
				{
					"groupBy": "product.keyword",
					"aggs": [
						{
							"agg": "sum",
							"field": "sales"
						},
						{
							"agg": "sum",
							"field": "quota"
						}
					]
				}
			]
		}
		return [{
			queryAddress: this.queryAddress,
			xAxisFormat: {
				periodBase: proposal && proposal.get( "periodBase" ),
				periodStep: proposal && proposal.get( "periodStep" )
			},
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": searchRuls,
						"sort": ["phase"]
					},
					"aggs": [
						{
							"groupBy": "%2Bphase",
							"aggs": agg
						}
					]
				},
				"format": [
					{
						"class": "addCol",
						"args": [
							{
								"name": "product.keyword",
								"value":  "all"
							},
							{
								"name": "指标达成率",
								"value": ["/", "sum(sales)", "sum(quota)"]
							}
						]
					},
					{
						"class": "cut2DArray",
						"args": [
							"phase",
							"sum(sales)",
							"sum(quota)",
							"指标达成率",
							"product.keyword"
						]
					}
				]
			}
		}]
	},
	generateRepCircleCondition( phase ) {
		let jobId = this.getJobId()

		return [{
			queryAddress: this.queryAddress,
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": [
							["eq", "category", "Resource"],
							["eq", "phase", phase],
							["eq", "job_id.keyword", jobId]
						]
					},
					"aggs": [
						{
							"groupBy": "representative.keyword",
							"aggs": [
								{
									"groupBy": "phase",
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
						"args": [
							"sum(sales)"
						]
					},
					{
						"class": "cut2DArray",
						"args": [
							"representative.keyword",
							"sum(sales)",
							"phase",
							"rate(sum(sales))"
						]
					}
				]
			}
		}]
	},
	generateRepBarLineCondition( repName, prodName, proposal ) {
		let searchRuls = [],
			jobId = this.getJobId()

		if ( isEmpty( prodName ) ) {
			searchRuls = [
				["eq", "category", "Resource"],
				["eq", "representative.keyword", repName],
				["eq", "job_id.keyword", jobId]
			]
		} else {
			searchRuls = [
				["eq", "category", "Resource"],
				["eq", "product", prodName],
				["eq", "representative.keyword", repName],
				["eq", "job_id.keyword", jobId]
			]
		}
		return [{
			queryAddress: this.queryAddress,
			xAxisFormat: {
				periodBase: proposal && proposal.get( "periodBase" ),
				periodStep: proposal && proposal.get( "periodStep" )
			},
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": searchRuls,
						"sort": ["phase"]
					},
					"aggs": [
						{
							"groupBy": "representative.keyword",
							"aggs": [
								{
									"groupBy": "%2Bphase",
									"aggs": [
										{
											"agg": "sum",
											"field": "sales"
										},
										{
											"agg": "sum",
											"field": "quota"
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
						"args": [
							"sum(quota)"
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
								"name": "指标达成率",
								"value": ["/", "sum(sales)", "sum(quota)"]
							}
						]
					},
					{
						"class": "cut2DArray",
						"args": [
							"phase",
							"sum(sales)",
							"sum(quota)",
							"指标达成率",
							"product",
							"representative.keyword"
						]
					}
				]
			}
		}]
	},
	generateHospCircleCondition( phase ) {
		let jobId = this.getJobId()

		return [{
			queryAddress: this.queryAddress,
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": [
							["eq", "category", "Hospital"],
							["eq", "phase", phase],
							["eq", "job_id.keyword", jobId]
						]
					},
					"aggs": [
						{
							"groupBy": "phase",
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
						"class": "cut2DArray",
						"args": [
							"hospital_level.keyword",
							"sum(sales)",
							"phase",
							"rate(sum(sales))"
						]
					}
				]
			}
		}]
	},
	generateHospBarLineCondition( hospName, prodName, proposal ) {
		let searchRuls = [],
			jobId = this.getJobId()

		if ( isEmpty( prodName ) ) {
			searchRuls = [
				["eq", "hospital.keyword", hospName],
				["eq", "job_id.keyword", jobId]
			]
		} else {
			searchRuls = [
				["eq", "product", prodName],
				["eq", "hospital.keyword", hospName],
				["eq", "job_id.keyword", jobId]
			]
		}
		return [{
			queryAddress: this.queryAddress,
			xAxisFormat: {
				periodBase: proposal && proposal.get( "periodBase" ),
				periodStep: proposal && proposal.get( "periodStep" )
			},
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": searchRuls,
						"sort": ["phase"]
					},
					"aggs": [
						{
							"groupBy": "hospital.keyword",
							"aggs": [
								{
									"groupBy": "%2Bphase",
									"aggs": [
										{
											"agg": "sum",
											"field": "sales"
										},
										{
											"agg": "sum",
											"field": "quota"
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
						"args": [
							"sum(quota)"
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
								"name": "指标达成率",
								"value": ["/", "sum(sales)", "sum(quota)"]
							}
						]
					},
					{
						"class": "cut2DArray",
						"args": [
							"phase",
							"sum(sales)",
							"sum(quota)",
							"指标达成率",
							"product",
							"hospital.keyword"
						]
					}
				]
			}
		}]
	},
	generateRegionCircleCondition( phase ) {
		let jobId = this.getJobId()

		return [{
			queryAddress: this.queryAddress,
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": [
							["eq", "category", "Region"],
							["eq", "phase", phase],
							["eq", "job_id.keyword", jobId]
						]
					},
					"aggs": [
						{
							"groupBy": "region.keyword",
							"aggs": [
								{
									"groupBy": "phase",
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
						"args": [
							"sum(sales)"
						]
					},
					{
						"class": "cut2DArray",
						"args": [
							"region.keyword",
							"sum(sales)",
							"phase",
							"rate(sum(sales))"
						]
					}
				]
			}
		}]
	},
	generateRegionBarLineCondition( regName, prodName, proposal ) {

		let searchRuls = [],
			jobId = this.getJobId()

		if ( isEmpty( prodName ) && isEmpty( regName ) ) {
			searchRuls = []
		} else if ( isEmpty( prodName ) && !isEmpty( regName ) ) {
			searchRuls = [
				["eq", "region.keyword", regName]
			]
		} else if ( !isEmpty( prodName ) && isEmpty( regName ) ) {
			searchRuls = [
				["eq", "product.keyword", prodName]
			]
		} else {
			searchRuls = [
				["eq", "product.keyword", prodName],
				["eq", "region.keyword", regName]
			]
		}
		searchRuls.unshift( ["eq", "category", "Region"] )
		searchRuls.push( ["eq", "job_id.keyword", jobId] )

		return [{
			queryAddress: this.queryAddress,
			xAxisFormat: {
				periodBase: proposal && proposal.get( "periodBase" ),
				periodStep: proposal && proposal.get( "periodStep" )
			},
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": searchRuls,
						"sort": ["phase"]
					},
					"aggs": [{
						"groupBy": "%2Bphase",
						"aggs": [{
							"agg": "sum",
							"field": "sales"
						}, {
							"agg": "sum",
							"field": "quota"
						}]
					}]
				},
				"format": [{
					"class": "calcRate",
					"args": ["sum(quota)"]
				},
				{
					"class": "addCol",
					"args": [
						{
							"name": "product.keyword",
							"value": "all"
						},
						{
							"name": "指标达成率",
							"value": ["/", "sum(sales)", "sum(quota)"]
						}
					]
				},
				{
					"class": "cut2DArray",
					"args": ["phase", "sum(sales)", "sum(quota)", "指标达成率", "product.keyword", "region.keyword"]
				}]

			}
		}]
	},
	generateRepRadarCondition( repName, phase ) {
		let jobId = this.getJobId()

		return [{
			queryAddress: this.queryAddress,
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": [
							["eq", "category", "Resource"],
							["eq", "phase", phase],
							["eq", "job_id.keyword", jobId]
						]
					},
					"aggs": [
						{
							"groupBy": "representative.keyword",
							"aggs": [
								{
									"agg": "max",
									"field": "product_knowledge"
								},
								{
									"agg": "max",
									"field": "work_motivation"
								},
								{
									"agg": "max",
									"field": "behavior_efficiency"
								},
								{
									"agg": "max",
									"field": "territory_management_ability"
								},
								{
									"agg": "max",
									"field": "sales_skills"
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
								["eq", "representative.keyword", repName],
								["eq", "representative.keyword", "平均值"]
							]]
						]
					},
					{
						"class": "cut2DArray",
						"args": [
							"representative.keyword",
							"max(product_knowledge)",
							"max(work_motivation)",
							"max(behavior_efficiency)",
							"max(territory_management_ability)",
							"max(sales_skills)"
						]
					}
				]
			}
		}]
	},
	generateProdCompLinesCondition( productarea, periodBase, periodStep ) {
		let jobId = this.getJobId()

		return [{
			queryAddress: this.queryAddress,
			xAxisFormat: {
				periodBase: periodBase,
				periodStep: periodStep
			},
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": [
							["eq", "category", "Product"],
							["eq", "job_id.keyword", jobId],
							["eq", "product_area.keyword", productarea]
						]
					},
					"aggs": [
						{
							"groupBy": "%2Bphase",
							"aggs": [
								{
									"groupBy": "product.keyword",
									"aggs": [
										{
											"agg": "sum",
											"field": "share"
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
							"yAxis": "phase",
							"xAxis": "product.keyword",
							"value": "sum(share)",
							"head": "phase"
						}
					}
				]
			}
		}]
	},
	generateResultProductCircleCondition( proposalCase, phase, productarea ) {

		let searchRuls = [],
			jobId = this.getJobId()

		if ( proposalCase === "tm" ) {
			searchRuls = [
				["eq", "category", "Product"],
				["eq", "phase", phase],
				["eq", "job_id.keyword", jobId],
				["eq", "product_area.keyword", productarea]
			]
		} else {
			searchRuls = [
				["eq", "category", "Product"],
				["eq", "phase", phase],
				["eq", "job_id.keyword", jobId],
				["eq", "status.keyword", "已开发"],
				["eq", "product_area.keyword", productarea]
			]
		}
		return [{
			queryAddress: this.queryAddress,
			data: {
				"model": "tmrs",
				"query": {
					"search": {
						"and": searchRuls,
						"sort": ["phase"]
					},
					"aggs": [
						{
							"groupBy": "%2Bphase",
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
							"phase",
							"rate(sum(sales))"
						]
					}
				]
			}
		}]
	}
} )
