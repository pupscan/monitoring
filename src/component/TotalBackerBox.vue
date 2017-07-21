<template>
    <value-box :status="status" title="Total backers" color="#5bc0de" icon="users">{{ total | number }}</value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'total-backer',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                total: 'totalBacker',
                status: 'totalBackerStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchTotalBacker')
        }
    }
</script>