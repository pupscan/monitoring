<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-6 col-lg-3">
                <twitter></twitter>
            </div>

            <div class="col-sm-6 col-lg-3">
                <facebook></facebook>
            </div>

            <div class="col-sm-6 col-lg-4">
                <total-fund></total-fund>
            </div>

            <div class="col-sm-6 col-lg-2">
                <total-backer></total-backer>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 col-xl-6">
                <indiegogo></indiegogo>
            </div>
            <div class="col-md-12 col-xl-6">
            </div>
        </div>
    </div>
</template>

<script>
    import Indiegogo from './component/Indiegogo'
    import TotalFund from './component/TotalFund'
    import TotalBacker from './component/TotalBacker'
    import Twitter from './component/Twitter'
    import Facebook from './component/Facebook'

    const debug = process.env.NODE_ENV !== 'production'
    const refreshIntervalInMs = (debug ? 20 : 300) * 1000 // 10 seconds or 5 minutes

    export default {
        name: 'dashboard',
        components: {
            Twitter,
            Facebook,
            TotalFund,
            TotalBacker,
            Indiegogo,
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