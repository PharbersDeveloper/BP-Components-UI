import Controller from '@ember/controller';

export default Controller.extend({
    basicUse:`{{bp-table columns=model.tableColumns0 data=model.tableData0}}`,
    withBoard: `{{bp-table columns=model.tableColumns0 data=model.tableData0 rowBorder=true}}`,
    cancelHover:`{{bp-table columns=model.tableColumns0 data=model.tableData0 rowHover=false}}`,
    fixedColumn:  `{{bp-table columns=model.tableColumns1 data=model.tableData1 fixedColumn=true}}`,
    fixedRow: `{{bp-table columns=model.tableColumns1 data=model.tableData1 fixedColumn=true height='200px'}}`,
    basicFixedRow: `{{bp-table columns=model.tableColumns0 data=model.tableData0 height='200px'}}`,
    tableSort: `
        {{bp-table columns=tableColumns2 data=tableData2 fixedColumn=true}}
        tableColumns2 = [
            {
                label: '姓名',
                valuePath: 'name',
                align: 'left',
                sortable: true,
                width: 120
            },{
                label: '年纪',
                valuePath: 'age',
                align: 'left',
                sortable: true,
                width: 80
            },{
                label: '指标达成',
                valuePath: 'rate',
                align: 'center',
                sortable: true,
                cellComponent: 'table/decimal-to-percentage',
                width: 80
            },{
                label: '销售额',
                valuePath: 'sales',
                align: 'right',
                sortable: true,
                cellComponent: 'table/format-number',
                width: 120
            },{
                label: '地址',
                valuePath: 'address',
                align: 'left',
                width: 280
            },{
                label: '重要日期',
                valuePath: 'date',
                align: 'center',
                width: 280
            },{
                label: '所属国家',
                valuePath: 'country',
                align: 'center',
                sortable: true,
                width: 180
            },{
                label: '个人网站',
                valuePath: 'net',
                align: 'left',
                width: 280
            }
        ],
        tableData2= [
            {name:'Rena Berry',age:42,address: '24.31.87.74',rate:0.5438,sales:8162894,date: '9/18/2081',country: 'Cape Verde',net:'http://zela.mx/ferizok'},
            {name:'Jared Beck',age:21,address: '241.28.90.178',rate:0.921,sales:3410156,date: '10/11/2111',country: 'Congo - Kinshasa',net:'http://falizhop.ba/doragu'},
            {name:'Calvin Scott',age:13,address: '33.8.73.132',rate:0.1531,sales:5673878,date: '5/23/2054',country: 'Malta',net:'http://sakjoh.gn/wil'},
            {name:'Luis Hart',age:40,address: '169.196.101.6',rate:0.7245,sales:9200924,date: '3/6/2028',country: 'Albania',net:'http://manjorduv.bi/kazhobi'},
            {name:'Kevin Mathis',age:17,address: '223.133.177.194',rate:0.43,sales:6507712,date: '9/8/2074',country: 'Grenada',net:'http://di.gm/boh'},
        ]
        `
});
