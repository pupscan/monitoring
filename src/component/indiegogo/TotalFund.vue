<template>
    <div class="card card-inverse card-success">
        <div class="card-block">
            <div class="h1 text-muted text-right mb-2">
                <i class="fa fa-usd fa-lg"></i>
            </div>
            <div class="h1 mb-0"><loader :status="status">{{ total | number(0, '$ ')}}</loader></div>
            <small class="text-muted text-uppercase font-weight-bold">Total funds</small>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Loader from './Loader'

    export default {
        name: 'total-fund',
        components: {
            Loader
        },
        computed: {
            ...mapGetters({
                total: 'totalFund',
                status: 'indiegogoStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchTotalFund')
        }
    }
</script>
