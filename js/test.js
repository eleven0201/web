//01任务详情占比分布
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

option = {

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 0,
        top:100,
        x:'70%',
        y:'center',
        icon:'rect',
        itemWidth:15,
        itemHeight:15,
        itemGap:20,
        textStyle:{
            color:'#ffffff',
            fontSize: 16,
            lineHeight:25,
        },
        data: ['80分以下： 200（增加：203.50%）', '80分-90分： 120（增加：203.50%）', '90分-100分： 200（增加：203.50%）'],
    },
    series: [
        {
            //此系列自己的调色盘
            color: ['#ff6b6b', '#7d7eaa', '#183c6d'],
            name: '访问来源',
            type: 'pie',
            //radius: '60%',  // 设置饼状图大小，100%时，最大直径=整个图形的min(宽，高)
            radius: ['25%', '60%'],  // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
            center: ['30%', '55%'],  // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
            data: [
                {value: 335, name: '80分以下： 200（增加：203.50%）'},
                {value: 310, name: '80分-90分： 120（增加：203.50%）'},
                {value: 1548, name: '90分-100分： 200（增加：203.50%）'}
            ],
            itemStyle:{
                normal: {
                    label:{
                        textStyle: {
                            color:'#e5dfff',
                            fontSize: 14,
                        }
                    }
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            // 设置值域的那指向线
            labelLine: {
                normal: {
                    show: true   // show设置线是否显示，默认为true，可选值：true ¦ false
                }
            },

        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

