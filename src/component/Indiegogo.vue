<template>
    <crowdfunding :name="'Indiegogo'"
                  :status="status"
                  :total-fund="collectTotalMonth | number(0, '$ ')"
                  :fund-goal="goalMonth | number(0, '$ ')"
                  :fund-reached="goalMonthReached | number(0, '', ' %')"
                  :fund-goal-chart="goalMonth"
                  :fund-total-month="collectMonth"
                  :fund-current-chart="collectMonthCurrent"></crowdfunding>
</template>

<script>
    import Crowdfunding from './Crowdfunding.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'indiegogo',
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
        components: {
            Crowdfunding,
        },
        created () {
            this.$store.dispatch('fetchIndiegogo')
        }
    }
</script>