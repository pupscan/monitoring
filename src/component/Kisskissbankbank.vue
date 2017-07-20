<template>
    <crowdfunding :name="'Kisskissbankbank'"
                  :status="status"
                  :total-fund="collectTotalMonth | number(0, '$ ')"
                  :fund-goal="goalMonth | number(0, '$ ')"
                  :fund-reached="goalMonthReached | number(0, '', ' %')"
                  :fund-goal-chart="goalMonth"
                  :fund-total-month="collectMonth"></crowdfunding>
</template>

<script>
    import Crowdfunding from './Crowdfunding.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'kisskissbankbank',
        computed: {
            ...mapGetters({
                collect: 'kisskissbankbankCollect',
                collectMonth: 'kisskissbankbankCollectMonth',
                collectTotalMonth: 'kisskissbankbankCollectTotalMonth',
                backers: 'kisskissbankbankBackers',
                goalMonth: 'kisskissbankbankGoalMonth',
                goalMonthReached: 'kisskissbankbankGoalMonthReached',
                status: 'kisskissbankbankStatus',
            })
        },
        components: {
            Crowdfunding,
        },
        created() {
            this.$store.dispatch('fetchKisskissbankbank')
        }
    }
</script>