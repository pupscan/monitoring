<template>
    <value-box :status="status" title="Month fund" color="#EB1478" icon="usd">
        {{ collectTotalMonth | number(0, '$ ')}}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'indiegogo-month-fund-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collectTotalMonth: 'indiegogoCollectTotalMonth',
                status: 'indiegogoStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchIndiegogo')
        }
    }
</script>
