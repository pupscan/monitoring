<template>
    <value-box :status="status" title="Likes" color="#3B5998" icon="facebook">{{likes}}</value-box>
</template>

<script>
    import ValueBox from './ValueBox'
    import {mapGetters} from 'vuex'

    export default {
        name: 'facebook-box',
        components: {
            ValueBox,
        },
        computed: {
            ...mapGetters({
                likes: 'facebookLikes',
                followers: 'facebookFavorites',
                last: 'facebookLast',
                status: 'facebookStatus'
            })
        },
        created() {
            this.$store.dispatch('fetchFacebook')
        }
    }
</script>