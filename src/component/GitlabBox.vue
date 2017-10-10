<template>
    <value-box :status="status" title="Version 1.0" color="#292961" icon="gitlab">{{progression | number(0, '', ' %')}}</value-box>
</template>

<script>
    import ValueBox from './ValueBox'
    import {mapGetters} from 'vuex'

    export default {
        name: 'gitlab-box',
        components: {
            ValueBox,
        },
        computed: {
            ...mapGetters({
                progression: 'gitlabProgression',
                status: 'gitlabStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchGitlab')
        }
    }
</script>