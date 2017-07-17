<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-sm-6 col-lg-3">
                <div class="social-box facebook">
                    <i class="fa fa-facebook"></i>
                    <div class="chart-wrapper">
                        <social-chart
                                :data="[65, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55, 40]"/>
                    </div>
                    <ul>
                        <li>
                            <strong>89k</strong>
                            <span>followers</span>
                        </li>
                        <li>
                            <strong>459 <span>1382</span></strong>
                            <span>like</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6 col-lg-3">
                <div class="social-box twitter">
                    <i class="fa fa-twitter"></i>
                    <div class="chart-wrapper">
                        <social-chart
                                :data="[1, 13, 9, 17, 34, 41, 38, 59, 84, 84, 51, 55, 40, 59, 84, 84, 51, 55, 40]"/>
                    </div>
                    <ul>
                        <li>
                            <strong>973 <span>149</span></strong>
                            <span>followers</span>
                        </li>
                        <li>
                            <strong>1.792</strong>
                            <span>like</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-6 col-lg-4">
                <div class="card card-inverse card-success">
                    <div class="card-block">
                        <div class="h1 text-muted text-right mb-2">
                            <i class="fa fa-usd fa-lg"></i>
                        </div>
                        <div class="h1 mb-0">$ 420.000</div>
                        <small class="text-muted text-uppercase font-weight-bold">Total funds</small>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 col-lg-2">
                <div class="card card-inverse card-info">
                    <div class="card-block">
                        <div class="h1 text-muted text-right mb-2">
                            <i class="fa fa-users fa-lg"></i>
                        </div>
                        <div class="h1 mb-0">3 498</div>
                        <small class="text-muted text-uppercase font-weight-bold">Total backers</small>
                    </div>
                </div>
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
    import SocialChart from './component/SocialBox'
    import FundingChart from './component/FundingChart'


    export default {
        name: 'dashboard',
        components: {
            SocialChart,
            FundingChart
        }
    }
</script>

<style lang="scss" scoped>
    .chart-wrapper {
        padding-top: 20px;
    }
</style>