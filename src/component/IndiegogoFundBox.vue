<template>
    <value-box :status="status" title="Fund" color="#EB1478" icon="usd">
        {{ collect | number(0, '$ ') }}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'indiegogo-fund-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collect: 'indiegogoCollect',
                status: 'indiegogoStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchIndiegogo')
        }
    }
</script>
