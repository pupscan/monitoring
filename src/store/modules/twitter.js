import stats from '../../api'

const state = {
    likes: 0,
    followers: 0,
    status: 'loaded',
    last: []
}

const getters = {
    twitterLikes: state => state.likes,
    twitterFollowers: state => state.followers,
    twitterStatus: state => state.status,
    twitterLast: state => state.last
}

const actions = {
    fetchTwitter ({commit}) {
        commit('FETCH_TWITTER')
        stats.twitter()
            .then(twitter => commit('UPDATE_TWITTER', {twitter}))
            .catch(reason => commit('ERROR_LOAD_TWITTER', reason))
    }
}

const mutations = {
    ['FETCH_TWITTER'] (state) {
        state.status = 'loading'
    },
    ['UPDATE_TWITTER'] (state, {twitter}) {
        state.status = 'loaded'
        state.likes = twitter.likes
        state.followers = twitter.followers
        state.last = twitter.last
    },
    ['ERROR_LOAD_TWITTER'] (state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}