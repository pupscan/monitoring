import stats from '../../api'

const state = {
    total: 0,
    status: 'loaded'
}

const getters = {
    totalFund: state => state.total,
    totalFundStatus: state => state.status
}

const actions = {
    fetchTotalFund({commit}) {
        commit('FETCH_TOTAL_FUND')
        stats.totalFund()
            .then(totalFund => commit('UPDATE_TOTAL_FUND', { totalFund }))
            .catch(reason => commit('ERROR_LOAD_TOTAL_FUND', reason))
    }
}

const mutations = {
    ['FETCH_TOTAL_FUND'](state) {
        state.status = 'loading'
    },
    ['UPDATE_TOTAL_FUND'](state, { totalFund }) {
        state.status = 'loaded'
        state.total = totalFund
    },
    ['ERROR_LOAD_TOTAL_FUND'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}