<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <twitter-box></twitter-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <facebook-box></facebook-box>
            </div>
            <div class="col-md-6 col-xl-3">
            </div>
            <div class="col-md-6 col-xl-3">
            </div>
        </div>

        <indiegogo-box></indiegogo-box>

        <div class="row">
            <div class="col-md-6 col-xl-3">
                <total-fund-box></total-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <total-fund-month-box></total-fund-month-box>
            </div>
            <div class="col-md-6 col-xl-3">

            </div>
            <div class="col-md-6 col-xl-3">
                <total-backer-box></total-backer-box>
            </div>
        </div>
    </div>
</template>

<script>
    import Indiegogo from './component/Indiegogo'
    import Kisskissbankbank from './component/Kisskissbankbank'
    import TotalFund from './component/TotalFund'
    import TotalBackerBox from './component/TotalBackerBox'
    import FacebookBox from './component/FacebookBox'
    import TwitterBox from './component/TwitterBox'
    import TotalFundBox from './component/TotalFundBox'
    import TotalFundMonthBox from './component/TotalFundMonthBox'
    import IndiegogoBox from './component/IndiegogoBox'
    import KKBBBox from './component/KKBBBox'

    const debug = process.env.NODE_ENV !== 'production'
    const refreshIntervalInMs = (debug ? 6000 : 600) * 1000 // 60 seconds or 5 minutes

    export default {
        name: 'dashboard',
        components: {
            FacebookBox,
            TotalFundBox,
            TotalFundMonthBox,
            TotalBackerBox,
            IndiegogoBox,
            Indiegogo,
            Kisskissbankbank,
            TwitterBox,
            KKBBBox,
        },
        created() {
            setInterval(function () {
                this.$store.dispatch('fetchAll')
            }.bind(this), refreshIntervalInMs);
        }
    }
</script>

<style lang="scss" scoped>
    .chart-wrapper {
        padding-top: 20px;
    }
    
    body {
        zoom: .85;
    }
</style>
