<template>
    <value-box :status="status" title="Fund" color="#00C3FF" icon="usd">
        {{ collect | number(0, '$ ', '') }}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'motion-fund-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                collect: 'motionCollect',
                status: 'motionStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchMotion')
        }
    }
</script>
