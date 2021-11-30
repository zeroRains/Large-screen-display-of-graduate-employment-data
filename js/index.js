// 柱状图模块
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                // 阴影
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表大小
        grid: {
            left: '0%',
            right: '0%',
            bottom: '4%',
            top: '10px',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["计科","物联网","信安","软工","智科"],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // 不显示x坐标轴的演示
                axisLine: {
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2,
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }
        ],
        series: [
            {
                name: '就业人数',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500],
                itemStyle: {
                    // 修改柱子变成圆角
                    barBorderRadius: 5,
                }
            }
        ]
    };
    // 把配置项给实例对象
    myChart.setOption(option);
    // 让图标自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
// 柱状图2
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    var option = {
        // 修改位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        // 不显示x轴
        xAxis: {
            show: false
        },
        yAxis: [{
            inverse: true,
            type: 'category',
            data: ["计算机科学与技术","物联网工程","信息安全","软件工程","智能科学与技术"],
            // 不显示y轴的线
            axisLine: {
                show: false,
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff"
            }
        }, {
            show: true,
            inverse: true,
            data: [7020, 3500, 6100, 7930, 6640],
            // 不显示y轴的线
            axisLine: {
                show: false
            },
            // 不显示刻度
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: "#fff"
                }
            }

        }],

        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                // barCategoryGap: 50,
                // harWidth: 10,
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // 此时的color 可以修改柱子的颜色
                    color: function (params) {
                        // params 传进来的是柱子对象
                        // console.log(params);
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },

                // 柱子之间的距离
                barCategoryGap: 50,
                barWidth: 10,
                // 图形上的文字标签
                label: {
                    normal: {
                        show: true,
                        // 图内显示
                        position: 'inside',
                        // 文字显示格式
                        formatter: "{c}%"
                    }
                },
                // 设置层叠，在第0层
                yAxisIndex: 0
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15,
                },
                data: [100, 100, 100, 100, 100],
                // 在第一层
                yAxisIndex: 1
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"));
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                // 图例文字颜色
                color: "#4c9bfd"
            },
            // 距离右边
            right: "10%",
            // data: ['邮件营销', '联盟广告']
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            borderColor: "#012f4a",
            show: true,
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#4c9bfd"
            },
            axisLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            // 去除刻线
            axisTick: {
                color: "#4c9bfd",// 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a" //分割线颜色
                }
            },
            axisLabel: {
                color: "#4c9bfd"
            },
        },
        color: ['#00f2f1', '#ed3f35',"pink"],
        series: [
            {
                name: '计算机科学与技术',
                data: [30, 22, 41, 36, 50, 55, 63, 50, 50, 70, 66, 75],
                type: 'line',
                // 折线修饰为圆滑
                smooth: true,
            }, {
                name: '软件工程',
                data: [40, 64, 73, 68, 81, 76, 77, 78, 90, 85, 87, 95],
                type: 'line',
                smooth: true,
            },{
                name: '信息安全',
                data: [50, 64, 78, 58, 71, 79, 67, 76, 40, 75, 87, 85],
                type: 'line',
                smooth: true,
            },

        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"));
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            data: ["金融行业", "IT行业", "国防事业", "市场销售", "其他"],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {

                name: "公司类型",
                type: "pie",
                // 设置饼形图在容器中的位置
                center: ["50%", "50%"],
                //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
                radius: ["40%", "60%"],
                // 不显示标签文字
                label: { show: false },
                // 不显示连接线
                labelLine: { show: false },
                data: [
                    { value: 20, name: "金融行业" },
                    { value: 100, name:  "IT行业" },
                    { value: 70, name: "国防事业"},
                    { value: 40, name: "市场销售" },
                    { value: 22, name:  "其他" }
                ],
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();
