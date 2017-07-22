<template>
    <value-box :status="status" title="Followers" color="#1DA1F2" icon="twitter" :data="last">{{followers}}
    </value-box>
</template>

<script>
    import ValueBox from './ValueBox'
    import {mapGetters} from 'vuex'

    export default {
        name: 'twitter-box',
        components: {
            ValueBox,
        },
        computed: {
            ...mapGetters({
                likes: 'twitterLikes',
                followers: 'twitterFollowers',
                last: 'twitterLast',
                status: 'twitterStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchTwitter')
        }
    }
</script>