<template>
    <value-box :status="status" title="Month fund" color="#00C3FF" icon="usd">
        {{ collectTotalMonth | number(0, '$ ', '')}}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'motion-month-fund-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collectTotalMonth: 'motionCollectTotalMonth',
                status: 'motionStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchMotion')
        }
    }
</script>
