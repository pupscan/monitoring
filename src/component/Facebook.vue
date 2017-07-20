<template>
    <div class="social-box facebook">
        <i class="fa fa-facebook social-icon"></i>
        <div class="chart-wrapper">
            <social-chart v-if="status=='loaded'" :data="last"/>
        </div>
        <ul>
            <li>
                <strong>
                    <loader :status="status">{{ favorites | number }}</loader>
                </strong>
                <span>favorites</span>
            </li>
            <li>
                <strong>
                    <loader :status="status">{{ likes | number }}</loader>
                </strong>
                <span>likes (1382)</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Loader from './Loader'
    import SocialChart from './SocialChart'
    import {mapGetters} from 'vuex'

    export default {
        name: 'facebook',
        components: {
            Loader,
            SocialChart
        },
        computed: {
            ...mapGetters({
                likes: 'facebookLikes',
                favorites: 'facebookFavorites',
                last: 'facebookLast',
                status: 'facebookStatus'
            })
        },
        created () {
            this.$store.dispatch('fetchFacebook')
        }
    }
</script>