import stats from '../../api'

const state = {
    total: 0,
    status: 'loaded'
}

const getters = {
    totalBacker: state => state.total,
    totalBackerStatus: state => state.status
}

const actions = {
    fetchTotalBacker({commit}) {
        commit('FETCH_TOTAL_BACKER')
        stats.totalBacker()
            .then(totalBacker => commit('UPDATE_TOTAL_BACKER', { totalBacker }))
            .catch(reason => commit('ERROR_LOAD_TOTAL_BACKER', reason))
    }
}

const mutations = {
    ['FETCH_TOTAL_BACKER'](state) {
        state.status = 'loading'
    },
    ['UPDATE_TOTAL_BACKER'](state, { totalBacker }) {
        state.status = 'loaded'
        state.total = totalBacker
    },
    ['ERROR_LOAD_TOTAL_BACKER'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}