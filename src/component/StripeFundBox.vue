<template>
    <value-box :status="status" title="Fund" color="#6772e5" icon="eur">
        {{ collect | number(0, '', ' €') }}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'stripe-fund-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collect: 'stripeCollect',
                status: 'stripeStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchStripe')
        }
    }
</script>
