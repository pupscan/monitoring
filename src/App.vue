<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-xl-2">
                <twitter-box></twitter-box>
            </div>
            <div class="col-xl-2">
                <facebook-box></facebook-box>
            </div>
            <div class="col-xl-4">
                <total-fund-box></total-fund-box>
            </div>
            <div class="col-xl-4">
                <total-backer-box></total-backer-box>
            </div>
        </div>

        <indiegogo-box></indiegogo-box>

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
    import IndiegogoBox from './component/IndiegogoBox'


    const debug = process.env.NODE_ENV !== 'production'
    const refreshIntervalInMs = (debug ? 6000 : 600) * 1000 // 60 seconds or 5 minutes

    export default {
        name: 'dashboard',
        components: {
            FacebookBox,
            TotalFundBox,
            TotalBackerBox,
            IndiegogoBox,
            Indiegogo,
            Kisskissbankbank,
            TwitterBox,
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
</style>