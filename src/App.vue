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
                            <span>friends</span>
                        </li>
                        <li>
                            <strong>459</strong>
                            <span>feeds</span>
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
                            <strong>973k</strong>
                            <span>followers</span>
                        </li>
                        <li>
                            <strong>1.792</strong>
                            <span>tweets</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-3 col-lg-2">
                <div class="card card-inverse card-danger">
                    <div class="card-block">
                        <div class="h1 text-muted text-right mb-2"><i class="fa fa-usd fa-lg"></i></div>
                        <div class="h4 mb-0">$ 420.000</div>
                        <small class="text-muted text-uppercase font-weight-bold">Total funds</small>
                    </div>
                </div>
            </div>

            <div class="col-sm-3 col-lg-2">
                <div class="card card-inverse card-success">
                    <div class="card-block">
                        <div class="h1 text-muted text-right mb-2"><i class="fa fa-users fa-lg"></i></div>
                        <div class="h4 mb-0">3 498</div>
                        <small class="text-muted text-uppercase font-weight-bold">Total backers</small>
                    </div>
                </div>
            </div>

            <div class="col-sm-3 col-lg-2">
                <div class="card card-inverse card-warning">
                    <div class="card-block">
                        <div class="h1 text-muted text-right mb-2"><i class="fa fa-sticky-note fa-lg"></i></div>
                        <div class="h4 mb-0">928</div>
                        <small class="text-muted text-uppercase font-weight-bold">Total ZDesk tickets</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-5">
                                <h4 class="card-title mb-0">Indiegogo</h4>
                                <div class="small text-muted">November 2016</div>
                            </div>
                        </div>
                        <funding-chart class="chart-wrapper" style="height:300px;margin-top:40px;"></funding-chart>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-sm-5">
                                <h4 class="card-title mb-0">KissKissBankBank</h4>
                                <div class="small text-muted">November 2016</div>
                            </div>
                        </div>
                        <funding-chart class="chart-wrapper" style="height:300px;margin-top:40px;"></funding-chart>
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