<template>
    <value-box :status="status" title="Total fund" color="#5cb85c" icon="usd" class="total-fund-box">{{ total | number(0, '$ ')}}</value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'total-fund',
        components: {
            ValueBox,
        },
        computed: {
            ...mapGetters({
                total: 'totalFund',
                status: 'totalFundStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchTotalFund')
        }
    }
</script>
<style lang="scss">
    .total-fund-box > .wrapper > .body {
       font-size: 3.6vw;
    }
</style>
