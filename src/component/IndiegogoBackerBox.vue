<template>
    <value-box :status="status" title="Backers" color="#EB1478" icon="users">
        {{ backers | number}}
    </value-box>
</template>

<script>
    import {mapGetters} from 'vuex'
    import ValueBox from './ValueBox'

    export default {
        name: 'indiegogo-backer-box',
        components: {
            ValueBox
        },
        computed: {
            ...mapGetters({
                backers: 'indiegogoBackers',
                status: 'indiegogoStatus',
            })
        },
        created() {
            this.$store.dispatch('fetchIndiegogo')
        }
    }
</script>
