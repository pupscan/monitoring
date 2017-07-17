<template>
    <div class="echarts">
        <IEcharts :option="options"></IEcharts>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue'

    // const brandPrimary = '#20a8d8'
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

    export default {
        props: [],
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
                yAxis:
                    {
                        splitNumber: 3,
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
                series: [
                    {
                        name: 'Funds',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: brandInfo
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: convertHex(brandInfo, 10)
                            }
                        },
                        data: [193, 138, 121, 54, 145, 106, 126, 59, 135, 166, 105, 125, 89, 128, 113, 102, 103, 196, 61, 130, 99, 56, 98, 137, 139, 83, 189, 106, 137, 139]
                    },
                    {
                        name: 'Goals',
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
                        data: [320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320, 320]
                    }
                ]
            }
        })
    }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 300px;
    }
</style>