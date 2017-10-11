<template>
    <div class="row">
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Fund" color="#6772e5" icon="eur">
                {{ collect | number(0, '', ' €') }}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Month fund" color="#6772e5" icon="eur">
                {{ collectTotalMonth | number(0, '', ' €')}}
            </value-box>
        </div>
        <div class="col-md-6 col-xl-3">
        </div>
        <div class="col-md-6 col-xl-3">
            <value-box :status="status" title="Backers" color="#6772e5" icon="users">
                {{ backers | number}}
            </value-box>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'stripe-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collect: 'stripeCollect',
                collectTotalMonth: 'stripeCollectTotalMonth',
                backers: 'stripeBackers',
                status: 'stripeStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchStripe')
        }
    }
</script>
