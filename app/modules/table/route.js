import Route from '@ember/routing/route';
import {htmlSafe} from '@ember/template';

export default Route.extend({
    model() {
        return {
            columns: [{
                label: '姓名',
                valuePath: 'name',
                // sortable: false,
                // width: '190px'
            },
            {
                label: htmlSafe('指标贡献率<br />2019Q1'),
                valuePath: 'rate',
                cellComponent: 'table/decimal-to-percentage'
                // sortable: false
            }, {
                label: htmlSafe('YTD销售额<br />2019Q1'),
                valuePath: 'ytd',
                cellComponent: 'table/format-number'
                // sortable: false
            }, {
                label: '地址c',
                valuePath: 'cc'
                // sortable: false
            },
            {
                label: '地址d',
                valuePath: 'dd'
                // sortable: false
            }, {
                label: '地址e',
                valuePath: 'ee'
                // sortable: false
            },
            {
                label: '地址这行f<br />第二行',
                valuePath: 'ff'
                // sortable: false
            },
            {
                label: '地址这行f<br />第二行',
                valuePath: 'gg'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'hh'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'ii'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'jj'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'kk'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'll'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'mm'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'nn'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'oo'
                // sortable: false
            },
            {
                label: '地址',
                valuePath: 'pp'
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
            // {
            //     name: "宋楠5",
            //     rate: 0.89,
            //     ytd: 953697,
            //     cc: "16.0%",
            //     dd: "77.8%",
            //     ee: 0,
            //     ff: "-9.7%",
            //     gg: "32.6%",
            //     hh: "￥2,899,729",
            //     ii: "￥843,948",
            //     jj: "￥434,905",
            //     kk: "￥859,432",
            //     ll: "￥908,047",
            //     mm: "￥688,335",
            //     nn: "￥345,052",
            //     oo: "￥782,622",
            //     pp: "￥706,33"
            // }, {
            //     name: "宋楠6",
            //     rate: 0.89,
            //     ytd: 935975,
            //     cc: "16.0%",
            //     dd: "77.8%",
            //     ee: 0,
            //     ff: "-9.7%",
            //     gg: "32.6%",
            //     hh: "￥2,899,729",
            //     ii: "￥843,948",
            //     jj: "￥434,905",
            //     kk: "￥859,432",
            //     ll: "￥908,047",
            //     mm: "￥688,335",
            //     nn: "￥345,052",
            //     oo: "￥782,622",
            //     pp: "￥706,33"
            // }
        ],
        }
    }
});
