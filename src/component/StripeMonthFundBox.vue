<template>
    <value-box :status="status" title="Month fund" color="#6772e5" icon="eur">
        {{ collectTotalMonth | number(0, '', ' €')}}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'stripe-month-fund-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collectTotalMonth: 'stripeCollectTotalMonth',
                status: 'stripeStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchStripe')
        }
    }
</script>
