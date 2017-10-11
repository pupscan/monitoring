<template>
    <value-box :status="status" title="Backers" color="#6772e5" icon="users">
        {{ backers | number}}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'stripe-backer-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                backers: 'stripeBackers',
                status: 'stripeStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchStripe')
        }
    }
</script>
