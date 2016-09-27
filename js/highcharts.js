
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '故障统计'
        },
        subtitle: {
            text: '月度报表'
        },
        xAxis: {
            categories: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '数量'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} 个</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '总数',
            data: [10, 12, 13, 20, 14, 17, 18, 15, 16, 11, 8, 6]

        }, {
            name: '自动修复',
            data: [9, 10, 11, 13, 14, 10, 16, 14, 16, 8, 7, 6]

        }, {
            name: '人工修复',
            data: [1, 2, 2, 1, 0, 7, 2, 1, 0, 3, 1, 0]

        }]
    });
});