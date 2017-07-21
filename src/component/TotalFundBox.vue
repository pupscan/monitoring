<template>
    <value-box :status="status" title="Total fund" color="#5cb85c" icon="usd">{{ total | number(0, '$ ')}}</value-box>
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
