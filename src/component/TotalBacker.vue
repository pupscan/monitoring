<template>
    <div class="card card-inverse card-info">
        <div class="card-block">
            <div class="h1 text-muted text-right mb-2">
                <i class="fa fa-users fa-lg"></i>
            </div>
            <div class="h1 mb-0"><loader :status="status">{{ total | number }}</loader></div>
            <small class="text-muted text-uppercase font-weight-bold">Total backers</small>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Loader from './Loader'

    export default {
        name: 'total-backer',
        components: {
            Loader
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