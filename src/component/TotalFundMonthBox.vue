<template>
    <value-box :status="status" title="Month fund" color="#5cb85c" icon="usd">{{ total | number(0, '$ ')}}</value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'total-fund-month',
        components: {
            ValueBox,
        },
        computed: {
            ...mapGetters({
                total: 'totalFundMonth',
                status: 'totalFundMonthStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchTotalFundMonth')
        }
    }
</script>
