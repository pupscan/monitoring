<template>
    <div class="social-box twitter">
        <i class="fa fa-twitter social-icon"></i>
        <div class="chart-wrapper">
            <social-chart v-if="status=='loaded'" :data="last"/>
        </div>
        <ul>
            <li>
                <strong>
                    <loader :status="status">{{ followers | number }}</loader>
                </strong>
                <span>followers (149)</span>
            </li>
            <li>
                <strong>
                    <loader :status="status">{{ likes | number }}</loader>
                </strong>
                <span>likes</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Loader from './Loader'
    import SocialChart from './SocialChart'
    import {mapGetters} from 'vuex'

    export default {
        name: 'twitter',
        components: {
            Loader,
            SocialChart
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