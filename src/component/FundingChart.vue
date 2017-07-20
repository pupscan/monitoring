<template>
    <div class="echarts">
        <IEcharts :option="options" :loading="status"></IEcharts>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue'

    const brandPrimary = '#20a8d8'
    const brandSuccess = '#31bd6e'
    const brandInfo = '#63c2de'
    const brandDanger = '#f86c6b'

    function convertHex (hex, opacity) {
        hex = hex.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)

        const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
        return result
    }

    function kFormatter (num) {
        if (num === 0) return ''
        return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
    }

    export default {
        props: ['status', 'goal', 'fund', 'fundCurrent'],
        components: {
            IEcharts
        },
        data: () => ({
            options: {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                grid: {
                    left: '0%',
                    right: '1%',
                    bottom: '3%',
                    top: '3%',
                    containLabel: true
                },
                xAxis: {
                    boundaryGap: false,
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#a1a5a6'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5c6061'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
                },
                yAxis: [
                    {
                        splitNumber: 4,
                        axisLine: {
                            lineStyle: {
                                color: "#dde1e2"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#dde1e2"
                            }
                        },
                        axisTick: {
                            length: 8,
                            show: true,
                            lineStyle: {
                                color: "#dde1e2"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#5c6061'
                            }
                        }
                    },
                    {
                        show: false
                    }],
                series: [
                    {
                        name: 'Total funds',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        label: {
                            normal: {
                                show: false,
                                position: 'top',
                                formatter: (params) => kFormatter(params.value),
                                textStyle: {
                                    color: brandSuccess,
                                    fontSize: 12,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: convertHex(brandSuccess, 10)
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: convertHex(brandSuccess, 10)
                            }
                        },
                        data: [],
                    },
                    {
                        name: 'Current funds',
                        type: 'bar',
                        yAxisIndex: 1,
                        symbol: 'none',
                        sampling: 'average',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                formatter: (params) => kFormatter(params.value),
                                textStyle: {
                                    color: brandInfo,
                                    fontSize: 12,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: brandInfo,
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: convertHex(brandInfo, 10)
                            }
                        },
                        data: [],
                    },
                    {
                        name: 'Goal',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: brandDanger,
                                lineStyle: {
                                    width: 2,
                                    type: 'dashed'
                                }
                            },
                            emphasis: {
                                color: 'blue'
                            }
                        },
                        data: []
                    }
                ]
            }
        }),
        watch: {
            goal: function (value) {
                this.options.series[2].data = Array(31).fill(value)
            },
            fund: function (value) {
                this.options.series[0].data = value.data
                this.options.xAxis.data = value.labels
            },
            fundCurrent: function (value) {
                this.options.series[1].data = value.data
            },
        },
        created () {

        }
    }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 300px;
    }
</style>