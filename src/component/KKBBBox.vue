<template>
    <div class="row">
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Fund" color="#000" icon="usd">
                {{ collect | number(0, '€ ')}}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Month fund" color="#000" icon="usd">
                {{ collectTotalMonth | number(0, '€ ')}}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Goal reached" color="#000" icon="trophy">
                {{ goalMonthReached | number(0, '', ' %')}}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Backers" color="#000" icon="users">
                {{ backers | number }}
            </value-box>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'kisskissbankbank-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collect: 'kisskissbankbankCollect',
                collectMonth: 'kisskissbankbankCollectMonth',
                collectMonthCurrent: 'kisskissbankbankCollectMonthCurrent',
                collectTotalMonth: 'kisskissbankbankCollectTotalMonth',
                backers: 'kisskissbankbankBackers',
                goalMonth: 'kisskissbankbankGoalMonth',
                goalMonthReached: 'kisskissbankbankGoalMonthReached',
                status: 'kisskissbankbankStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchKisskissbankbank')
        }
    }
</script>
