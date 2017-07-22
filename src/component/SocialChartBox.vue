<template>
    <div class="echarts">
        <IEcharts :option="options"></IEcharts>
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full.vue'

    function convertHex (hex, opacity) {
        hex = hex.replace('#', '')
        const r = parseInt(hex.substring(0, 2), 16)
        const g = parseInt(hex.substring(2, 4), 16)
        const b = parseInt(hex.substring(4, 6), 16)

        const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
        return result
    }

    export default {
        props: ['data', 'type'],
        components: {
            IEcharts
        },
        data: () => ({
            options: {}
        }),
        watch: {
            data: function (value) {
                console.log(value)
                this.options.series[0].data = value
                this.options.xAxis.data = value
            },
        },
        mounted () {
            this.options = {
                grid: {
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    top: '0%',
                    containLabel: false
                },
                xAxis: {
                    show: false,
                    boundaryGap: false,
                    data: []
                },
                yAxis: {
                    show: false,
                    boundaryGap: ['0%', '20%'],
                },
                series: [
                    {
                        type: this.type || 'line',
                        smooth: true,
                        symbol: 'none',
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: convertHex('#ffffff', 40),
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: convertHex('#ffffff', 10)
                            }
                        },
                        data: [],
                    },
                ]
            }

        }
    }
</script>

<style lang="scss" scoped>
    .echarts {
        height: 150px;
    }
</style>