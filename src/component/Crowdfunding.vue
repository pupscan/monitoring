<template>
    <div class="card">
        <div class="card-block">
            <div class="row">
                <div class="col-sm-5">
                    <h4 class="card-title mb-0">{{ name }}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <div class="callout callout-info">
                        <small class="text-muted">Total fund</small>
                        <br>
                        <strong class="h2">
                            <loader :status="status">{{ totalFund }}</loader>
                        </strong>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="callout callout-danger">
                        <small class="text-muted">Fund goal</small>
                        <br>
                        <strong class="h2">
                            <loader :status="status">{{ fundGoal }}</loader>
                        </strong>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="callout callout-success">
                        <small class="text-muted">Fund reached</small>
                        <br>
                        <strong class="h2">
                            <loader :status="status">{{ fundReached}}</loader>
                        </strong>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3">
                    <div class="callout callout-warning">
                        <small class="text-muted">Last mount fund</small>
                        <br>
                        <strong class="h2">$ XX XXX</strong></div>
                </div>
            </div>
            <funding-chart :status="status === 'loading'"
                           :goal="fundGoalChart"
                           :fund-current="fundCurrentChart"
                           :fund="fundTotalMonth"
                           class="chart-wrapper"></funding-chart>
        </div>
    </div>
</template>

<script>
    import FundingChart from './FundingChart'
    import Loader from './Loader'

    export default {
        name: 'crowdfunding',
        props: ['name', 'status', 'totalFund', 'fundGoal', 'fundReached', 'fundGoalChart', 'fundTotalMonth', 'fundCurrentChart'],
        components: {
            Loader,
            FundingChart,
        },
    }
</script>