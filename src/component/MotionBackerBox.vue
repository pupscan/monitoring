<template>
    <value-box :status="status" title="Backers" color="#00C3FF" icon="users">
        {{ backers | number}}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'motion-backer-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                backers: 'motionBackers',
                status: 'motionStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchMotion')
        }
    }
</script>
