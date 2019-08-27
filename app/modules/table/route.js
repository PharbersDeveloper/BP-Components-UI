import Route from '@ember/routing/route';
import {htmlSafe} from '@ember/template';

export default Route.extend({
    model() {
        return {
            columns: [{
                label: '姓名',
                valuePath: 'name',
                align: 'left',
                fixed: true,
                // sortable: false,
                width: '80'
            }, {
                label: htmlSafe('指标贡献率<br />2019Q1'),
                valuePath: 'rate',
                cellComponent: 'table/decimal-to-percentage',
                align: 'center',
                width: '100'
                // sortable: false
            }, {
                label: htmlSafe('YTD销售额<br />2019Q1'),
                valuePath: 'ytd',
                cellComponent: 'table/format-number',
                align: 'right',
                width: '120'
                // sortable: false
            }, {
                label: '地址c',
                valuePath: 'cc',
                width: '120 '
                // sortable: false
            }, {
                label: '地址d',
                valuePath: 'dd',
                width: '120'
                // sortable: false
            }, {
                label: '地址e',
                valuePath: 'ee',
                width: '120'
                // sortable: false
            }, {
                label: '地址这行f<br />第二行',
                valuePath: 'ff',
                width: '120 '
                // sortable: false
            }, {
                label: '地址这行f<br />第二行',
                valuePath: 'gg',
                width: '120'
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'hh',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'ii',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'jj',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'kk',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'll',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'mm',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'nn',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'oo',
                width: '120 '
                // sortable: false
            }, {
                label: '地址',
                valuePath: 'pp',
                width: '120 '
                // sortable: false
            }],
            tableData: [{
                name: "宋楠",
                rate: 0.89,
                ytd: 688335,
                cc: "16.0%",
                dd: "77.8%",
                ee: 0,
                ff: "-9.7%",
                gg: "32.6%",
                hh: "￥2,899,729",
                ii: "￥843,948",
                jj: "￥434,905",
                kk: "￥859,432",
                ll: "￥908,047",
                mm: "￥688,335",
                nn: "￥345,052",
                oo: "￥782,622",
                pp: "￥706,33"
            }, {
                name: "宋楠1",
                rate: 0.89,
                ytd: 856658,
                cc: "16.0%",
                dd: "77.8%",
                ee: 0,
                ff: "-9.7%",
                gg: "32.6%",
                hh: "￥2,899,729",
                ii: "￥843,948",
                jj: "￥434,905",
                kk: "￥859,432",
                ll: "￥908,047",
                mm: "￥688,335",
                nn: "￥345,052",
                oo: "￥782,622",
                pp: "￥706,33"
            }, {
                name: "宋楠2",
                rate: 0.89,
                ytd: 585576,
                cc: "16.0%",
                dd: "77.8%",
                ee: 0,
                ff: "-9.7%",
                gg: "32.6%",
                hh: "￥2,899,729",
                ii: "￥843,948",
                jj: "￥434,905",
                kk: "￥859,432",
                ll: "￥908,047",
                mm: "￥688,335",
                nn: "￥345,052",
                oo: "￥782,622",
                pp: "￥706,33"
            }, {
                name: "宋楠3",
                rate: 0.89,
                ytd: 364153,
                cc: "16.0%",
                dd: "77.8%",
                ee: 0,
                ff: "-9.7%",
                gg: "32.6%",
                hh: "￥2,899,729",
                ii: "￥843,948",
                jj: "￥434,905",
                kk: "￥859,432",
                ll: "￥908,047",
                mm: "￥688,335",
                nn: "￥345,052",
                oo: "￥782,622",
                pp: "￥706,33"
            }, {
                name: "宋楠4",
                rate: 0.89,
                ytd: 471287,
                cc: "16.0%",
                dd: "77.8%",
                ee: 0,
                ff: "-9.7%",
                gg: "32.6%",
                hh: "￥2,899,729",
                ii: "￥843,948",
                jj: "￥434,905",
                kk: "￥859,432",
                ll: "￥908,047",
                mm: "￥688,335",
                nn: "￥345,052",
                oo: "￥782,622",
                pp: "￥706,33"
             },
        ],
        columnsPeople: [
            {
                label: '姓名',
                valuePath: 'name',
                width: 120
                // sortable: false
            }, {
                label: '年纪',
                valuePath: 'age',
                width: 120,
                sortable: true
            }, {
                label: '学校',
                valuePath: 'school',
                width: 120
                // sortable: false
            },{
                label: '地址',
                valuePath: 'address',
                sortable: true
            },
        ],
        peopleData: [
            {
                name: 'brush lee',
                age: 33,
                school: 'hongkong middle school',
                address: 'Macau SAR ChinaBbIOtrtock'
            },{
                name: 'brush wang',
                age: 13,
                school: 'hongkong middle school',
                address: 'Fijisure pack as realize means quick development visit leaving tribe upper valuable machine attempt particularly pure is combination section soon volume sometime beat ought'
            },{
                name: 'brush zhang',
                age: 23,
                school: 'hongkong middle school',
                address: 'Mongoliabend doubt master problem alike express yellow none practice honor married musical stop according town liquid on frighten map screen part action pure plates'
            },
        ]
        }
    }
});
