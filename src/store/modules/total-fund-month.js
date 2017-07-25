import stats from '../../api'

const state = {
    total: 0,
    status: 'loaded'
}

const getters = {
    totalFundMonth: state => state.total,
    totalFundMonthStatus: state => state.status
}

const actions = {
    fetchTotalFundMonth({commit}) {
        commit('FETCH_TOTAL_FUND_MONTH')
        stats.totalFundMonth()
            .then(totalFundMonth => commit('UPDATE_TOTAL_FUND_MONTH', { totalFundMonth: totalFundMonth }))
            .catch(reason => commit('ERROR_LOAD_TOTAL_FUND_MONTH', reason))
    }
}

const mutations = {
    ['FETCH_TOTAL_FUND_MONTH'](state) {
        state.status = 'loading'
    },
    ['UPDATE_TOTAL_FUND_MONTH'](state, { totalFundMonth }) {
        state.status = 'loaded'
        state.total = totalFundMonth
    },
    ['ERROR_LOAD_TOTAL_FUND_MONTH'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}