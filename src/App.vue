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
                <div class="card">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-5">
                                <h4 class="card-title mb-0">Indiegogo</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-info">
                                    <small class="text-muted">Total fund</small>
                                    <br> <strong class="h2">$ 23 000</strong></div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-danger">
                                    <small class="text-muted">Fund goal</small>
                                    <br> <strong class="h2">$ 40 000</strong></div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-success">
                                    <small class="text-muted">Fund reached</small>
                                    <br> <strong class="h2">38 %</strong></div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-warning">
                                    <small class="text-muted">Last mount fund</small>
                                    <br> <strong class="h2">$ 36 890</strong></div>
                            </div>
                        </div>
                        <funding-chart class="chart-wrapper"></funding-chart>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xl-6">
                <div class="card">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-5">
                                <h4 class="card-title mb-0">KissKissBankBank</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-info">
                                    <small class="text-muted">Total fund</small>
                                    <br> <strong class="h2">$ 23 000</strong></div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-danger">
                                    <small class="text-muted">Fund goal</small>
                                    <br> <strong class="h2">$ 40 000</strong></div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-success">
                                    <small class="text-muted">Fund reached</small>
                                    <br> <strong class="h2">38 %</strong></div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="callout callout-warning">
                                    <small class="text-muted">Last mount fund</small>
                                    <br> <strong class="h2">$ 36 890</strong></div>
                            </div>
                        </div>
                        <funding-chart class="chart-wrapper"></funding-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FundingChart from './component/FundingChart'
    import TotalFund from './component/TotalFund'
    import TotalBacker from './component/TotalBacker'
    import Twitter from './component/Twitter'
    import Facebook from './component/Facebook'

    const refreshIntervalInMs = (process.env.REFRESH_INTERVAL_S || 10) * 1000

    export default {
        name: 'dashboard',
        components: {
            Twitter,
            Facebook,
            FundingChart,
            TotalFund,
            TotalBacker
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