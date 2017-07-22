<template>
    <div class="row">
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Fund" color="#EB1478" icon="usd">
                {{ collect | number(0, '$ ') }}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Month fund" color="#EB1478" icon="usd">
                {{ collectTotalMonth | number(0, '$ ')}}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Goal reached" color="#EB1478" icon="trophy">
                {{ goalMonthReached | number(0, '', ' %')}}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Backers" color="#EB1478" icon="users">
                {{ backers | number}}
            </value-box>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'indiegogo-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collect: 'indiegogoCollect',
                collectMonth: 'indiegogoCollectMonth',
                collectMonthCurrent: 'indiegogoCollectMonthCurrent',
                collectTotalMonth: 'indiegogoCollectTotalMonth',
                backers: 'indiegogoBackers',
                goalMonth: 'indiegogoGoalMonth',
                goalMonthReached: 'indiegogoGoalMonthReached',
                status: 'indiegogoStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchIndiegogo')
        }
    }
</script>
