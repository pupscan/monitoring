import stats from '../../api'

const state = {
    likes: 0,
    favorites: 0,
    status: 'loaded'
}

const getters = {
    facebookLikes: state => state.likes,
    facebookFavorites: state => state.favorites,
    facebookStatus: state => state.status
}

const actions = {
    fetchFacebook ({commit}) {
        commit('FETCH_FACEBOOK')
        stats.facebook()
            .then(facebook => commit('UPDATE_FACEBOOK', {facebook}))
            .catch(reason => commit('ERROR_LOAD_FACEBOOK', reason))
    }
}

const mutations = {
    ['FETCH_FACEBOOK'] (state) {
        state.status = 'loading'
    },
    ['UPDATE_FACEBOOK'] (state, {facebook}) {
        state.status = 'loaded'
        state.likes = facebook.likes
        state.favorites = facebook.favorites
    },
    ['ERROR_LOAD_FACEBOOK'] (state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}