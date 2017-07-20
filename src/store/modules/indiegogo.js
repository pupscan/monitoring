import stats from '../../api'


const state = {
    collect: 0,
    collectMonth: {labels: [], data: []},
    collectTotalMonth: 0,
    backers: 0,
    backersMonth: {labels: [], data: []},
    goalMonth: 0,
    goalMonthReached: 0,
    status: 'loaded',
}

const getters = {
    indiegogoCollect: state => state.collect,
    indiegogoCollectMonth: state => state.collectMonth,
    indiegogoCollectTotalMonth: state => state.collectTotalMonth,
    indiegogoBackers: state => state.backers,
    indiegogoBackersMonth: state => state.backersMonth,
    indiegogoGoalMonth: state => state.goalMonth,
    indiegogoGoalMonthReached: state => state.goalMonthReached,
    indiegogoStatus: state => state.status,
}

const actions = {
    fetchIndiegogo({commit}) {
        commit('FETCH_INDIEGOGO')
        stats.indiegogo()
            .then(indiegogo => commit('UPDATE_INDIEGOGO', {indiegogo}))
            .catch(reason => commit('ERROR_LOAD_INDIEGOGO', reason))
    }
}

const mutations = {
    ['FETCH_INDIEGOGO'](state) {
        state.status = 'loading'
    },
    ['UPDATE_INDIEGOGO'](state, {indiegogo}) {
        state.collect = indiegogo.collect
        state.collectMonth = indiegogo.collectMonth
        state.collectTotalMonth = indiegogo.collectTotalMonth
        state.backers = indiegogo.backers
        state.backersMonth = indiegogo.backersMonth
        state.goalMonth = indiegogo.goalMonth
        state.goalMonthReached = indiegogo.goalMonthReached
        state.status = 'loaded'
    },
    ['ERROR_LOAD_INDIEGOGO'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}