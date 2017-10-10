import stats from '../../api'

const state = {
    progression: 0,
    status: 'loaded',
}

const getters = {
    gitlabProgression: state => state.progression,
    gitlabStatus: state => state.status,
}

const actions = {
    fetchGitlab ({commit}) {
        commit('FETCH_GITLAB')
        stats.gitlab()
            .then(gitlab => commit('UPDATE_GITLAB', {gitlab}))
            .catch(reason => commit('ERROR_LOAD_GITLAB', reason))
    }
}

const mutations = {
    ['FETCH_GITLAB'] (state) {
        state.status = 'loading'
    },
    ['UPDATE_GITLAB'] (state, {gitlab}) {
        state.status = 'loaded'
        state.progression = gitlab
    },
    ['ERROR_LOAD_GITLAB'] (state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}