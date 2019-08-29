import Route from '@ember/routing/route';
import {htmlSafe} from '@ember/template';
import { later }  from '@ember/runloop';

export default Route.extend({
    model() {
       return new Promise(resolve=>{
            later(function() {
                let tableColumns0 = [
                    {
                        label: '姓名',
                        valuePath: 'name',
                        align: 'left',
                        // sortable: false,
                        width: 180
                    },{
                        label: '年纪',
                        valuePath: 'age',
                        align: 'left',
                        // sortable: false,
                        width: 80
                    },{
                        label: '地址',
                        valuePath: 'address',
                        align: 'left'
                    },
                ],
                tableData0 = [
                    {name:'Isaiah Ortega',age:5,address: '37.4.28.53'},
                    {name:'Harold Griffin',age:47,address: '225.32.171.165'},
                    {name:'Jared Guerrero',age:98,address: '58.138.173.147'},
                    {name:'Glenn Gutierrez',age:42,address: '236.38.56.12'},
                    {name:'Winnie May',age:91,address: '13.225.33.190'},
                ],
                tableColumns1 = [
                    {
                        label: '姓名',
                        valuePath: 'name',
                        align: 'left',
                        // sortable: false,
                        width: 180
                    },{
                        label: '年纪',
                        valuePath: 'age',
                        align: 'left',
                        // sortable: false,
                        width: 80
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
                        width: 180
                    },{
                        label: '个人网站',
                        valuePath: 'net',
                        align: 'left',
                        width: 280
                    }
                ],
                tableData1= [
                    {name:'Rena Berry',age:42,address: '24.31.87.74',date: '9/18/2081',country: 'Cape Verde',net:'http://zela.mx/ferizok'},
                    {name:'Jared Beck',age:21,address: '241.28.90.178',date: '10/11/2111',country: 'Congo - Kinshasa',net:'http://falizhop.ba/doragu'},
                    {name:'Calvin Scott',age:13,address: '33.8.73.132',date: '5/23/2054',country: 'Malta',net:'http://sakjoh.gn/wil'},
                    {name:'Luis Hart',age:40,address: '169.196.101.6',date: '3/6/2028',country: 'Albania',net:'http://manjorduv.bi/kazhobi'},
                    {name:'Kevin Mathis',age:17,address: '223.133.177.194',date: '9/8/2074',country: 'Grenada',net:'http://di.gm/boh'},
                ],
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
                resolve({tableColumns0,tableData0,tableColumns1,tableData1,tableColumns2,tableData2})
            },400)
        }).then(data=> {
            return data;
        })
     
        // return {
        //     columns: [{
        //         label: '姓名',
        //         valuePath: 'name',
        //         align: 'left',
        //         fixed: true,
        //         // sortable: false,
        //         width: '80'
        //     }, {
        //         label: htmlSafe('指标贡献率<br />2019Q1'),
        //         valuePath: 'rate',
        //         cellComponent: 'table/decimal-to-percentage',
        //         align: 'center',
        //         width: '100'
        //         // sortable: false
        //     }, {
        //         label: htmlSafe('YTD销售额<br />2019Q1'),
        //         valuePath: 'ytd',
        //         cellComponent: 'table/format-number',
        //         align: 'right',
        //         width: 120,
        //         sortable: true
        //     }, {
        //         label: '地址c',
        //         valuePath: 'cc',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址d',
        //         valuePath: 'dd',
        //         width: '120'
        //         // sortable: false
        //     }, {
        //         label: '地址e',
        //         valuePath: 'ee',
        //         width: '120'
        //         // sortable: false
        //     }, {
        //         label: '地址这行f<br />第二行',
        //         valuePath: 'ff',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址这行f<br />第二行',
        //         valuePath: 'gg',
        //         width: '120'
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'hh',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'ii',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'jj',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'kk',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'll',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'mm',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'nn',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'oo',
        //         width: '120 '
        //         // sortable: false
        //     }, {
        //         label: '地址',
        //         valuePath: 'pp',
        //         width: '120 '
        //         // sortable: false
        //     }],
        //     tableData: [{
        //         name: "宋楠",
        //         rate: 0.89,
        //         ytd: 688335,
        //         cc: "16.0%",
        //         dd: "77.8%",
        //         ee: 0,
        //         ff: "-9.7%",
        //         gg: "32.6%",
        //         hh: "￥2,899,729",
        //         ii: "￥843,948",
        //         jj: "￥434,905",
        //         kk: "￥859,432",
        //         ll: "￥908,047",
        //         mm: "￥688,335",
        //         nn: "￥345,052",
        //         oo: "￥782,622",
        //         pp: "￥706,33"
        //     }, {
        //         name: "宋楠1",
        //         rate: 0.89,
        //         ytd: 856658,
        //         cc: "16.0%",
        //         dd: "77.8%",
        //         ee: 0,
        //         ff: "-9.7%",
        //         gg: "32.6%",
        //         hh: "￥2,899,729",
        //         ii: "￥843,948",
        //         jj: "￥434,905",
        //         kk: "￥859,432",
        //         ll: "￥908,047",
        //         mm: "￥688,335",
        //         nn: "￥345,052",
        //         oo: "￥782,622",
        //         pp: "￥706,33"
        //     }, {
        //         name: "宋楠2",
        //         rate: 0.89,
        //         ytd: 585576,
        //         cc: "16.0%",
        //         dd: "77.8%",
        //         ee: 0,
        //         ff: "-9.7%",
        //         gg: "32.6%",
        //         hh: "￥2,899,729",
        //         ii: "￥843,948",
        //         jj: "￥434,905",
        //         kk: "￥859,432",
        //         ll: "￥908,047",
        //         mm: "￥688,335",
        //         nn: "￥345,052",
        //         oo: "￥782,622",
        //         pp: "￥706,33"
        //     }, {
        //         name: "宋楠3",
        //         rate: 0.89,
        //         ytd: 364153,
        //         cc: "16.0%",
        //         dd: "77.8%",
        //         ee: 0,
        //         ff: "-9.7%",
        //         gg: "32.6%",
        //         hh: "￥2,899,729",
        //         ii: "￥843,948",
        //         jj: "￥434,905",
        //         kk: "￥859,432",
        //         ll: "￥908,047",
        //         mm: "￥688,335",
        //         nn: "￥345,052",
        //         oo: "￥782,622",
        //         pp: "￥706,33"
        //     }, {
        //         name: "宋楠4",
        //         rate: 0.89,
        //         ytd: 471287,
        //         cc: "16.0%",
        //         dd: "77.8%",
        //         ee: 0,
        //         ff: "-9.7%",
        //         gg: "32.6%",
        //         hh: "￥2,899,729",
        //         ii: "￥843,948",
        //         jj: "￥434,905",
        //         kk: "￥859,432",
        //         ll: "￥908,047",
        //         mm: "￥688,335",
        //         nn: "￥345,052",
        //         oo: "￥782,622",
        //         pp: "￥706,33"
        //      },
        // ],
        // columnsPeople: [
        //     {
        //         label: '姓名',
        //         valuePath: 'name',
        //         width: 120
        //         // sortable: false
        //     }, {
        //         label: '年纪',
        //         valuePath: 'age',
        //         width: 420,
        //         sortable: true
        //     }, {
        //         label: '学校',
        //         valuePath: 'school',
        //         width: 120
        //         // sortable: false
        //     },{
        //         label: '地址',
        //         valuePath: 'address',
        //         width: 320,
        //         sortable: true
        //     },
        // ],
        // peopleData: [
        //     {
        //         name: 'brush lee',
        //         age: 16,
        //         school: 'hongkong middle school',
        //         address: 'tent not worried tree wet live wave behind settlers pass having national matter season birth mental shore skin opposite rear sheep some broke stepMacau SAR ChinaBbIOtrtock'
        //     },{
        //         name: 'brush wang',
        //         age: 13,
        //         school: 'hongkong middle school',
        //         address: 'Fijisure pack as realize means quick development visit leaving tribe upper valuable machine attempt particularly pure is combination section soon volume sometime beat ought'
        //     },{
        //         name: 'brush zhang',
        //         age: 23,
        //         school: 'hongkong middle school',
        //         address: 'Mongoliabend doubt master problem alike express yellow none practice honor married musical stop according town liquid on frighten map screen part action pure plates'
        //     },{
        //         name: 'xiuer chen',
        //         age: 3,
        //         school: 'hongkong middle school',
        //         address: 'best hang everywhere coal audience throughout card market avoid provide tell friend spoken movement source dot golden climate type mice least town cook sightMongoliabend doubt master problem alike express yellow none practice honor married musical stop according town liquid on frighten map screen part action pure plates'
        //     },
        // ]
        // }
    }
});
