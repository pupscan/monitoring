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

        <div class="row">
            <div class="col-md-6 col-xl-3">
                <indiegogo-month-fund-box></indiegogo-month-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <stripe-month-fund-box></stripe-month-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <motion-month-fund-box></motion-month-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <total-fund-month-box></total-fund-month-box>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <indiegogo-fund-box></indiegogo-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <stripe-fund-box></stripe-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <motion-fund-box></motion-fund-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <total-fund-box></total-fund-box>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <indiegogo-backer-box></indiegogo-backer-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <stripe-backer-box></stripe-backer-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <motion-backer-box></motion-backer-box>
            </div>
            <div class="col-md-6 col-xl-3">
                <total-backer-box></total-backer-box>
            </div>
        </div>
    </div>
</template>

<script>
    import TotalBackerBox from './component/TotalBackerBox'
    import FacebookBox from './component/FacebookBox'
    import TwitterBox from './component/TwitterBox'
    import TotalFundBox from './component/TotalFundBox'
    import TotalFundMonthBox from './component/TotalFundMonthBox'
    import GitlabBox from './component/GitlabBox'
    import IndiegogoMonthFundBox from './component/IndiegogoMonthFundBox'
    import IndiegogoFundBox from './component/IndiegogoFundBox'
    import IndiegogoBackerBox from './component/IndiegogoBackerBox'
    import StripeMonthFundBox from './component/StripeMonthFundBox'
    import StripeFundBox from './component/StripeFundBox'
    import StripeBackerBox from './component/StripeBackerBox'
    import MotionMonthFundBox from './component/MotionMonthFundBox'
    import MotionFundBox from './component/MotionFundBox'
    import MotionBackerBox from './component/MotionBackerBox'


    const debug = process.env.NODE_ENV !== 'production'
    const refreshIntervalInMs = (debug ? 6000 : 600) * 1000 // 60 seconds or 5 minutes

    export default {
        name: 'dashboard',
        components: {
            FacebookBox,
            TotalFundBox,
            TotalFundMonthBox,
            TotalBackerBox,
            TwitterBox,
            GitlabBox,
            IndiegogoMonthFundBox,
            IndiegogoFundBox,
            IndiegogoBackerBox,
            StripeMonthFundBox,
            StripeFundBox,
            StripeBackerBox,
            MotionMonthFundBox,
            MotionFundBox,
            MotionBackerBox,
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
