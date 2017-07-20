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
    kisskissbankbankCollect: state => state.collect,
    kisskissbankbankCollectMonth: state => state.collectMonth,
    kisskissbankbankCollectTotalMonth: state => state.collectTotalMonth,
    kisskissbankbankBackers: state => state.backers,
    kisskissbankbankBackersMonth: state => state.backersMonth,
    kisskissbankbankGoalMonth: state => state.goalMonth,
    kisskissbankbankGoalMonthReached: state => state.goalMonthReached,
    kisskissbankbankStatus: state => state.status,
}

const actions = {
    fetchKisskissbankbank({commit}) {
        commit('FETCH_KISSKISSBANKBANK')
        stats.kisskissbankbank()
            .then(kisskissbankbank => commit('UPDATE_KISSKISSBANKBANK', {kisskissbankbank}))
            .catch(reason => commit('ERROR_LOAD_KISSKISSBANKBANK', reason))
    }
}

const mutations = {
    ['FETCH_KISSKISSBANKBANK'](state) {
        state.status = 'loading'
    },
    ['UPDATE_KISSKISSBANKBANK'](state, {kisskissbankbank}) {
        state.collect = kisskissbankbank.collect
        state.collectMonth = kisskissbankbank.collectMonth
        state.collectTotalMonth = kisskissbankbank.collectTotalMonth
        state.backers = kisskissbankbank.backers
        state.backersMonth = kisskissbankbank.backersMonth
        state.goalMonth = kisskissbankbank.goalMonth
        state.goalMonthReached = kisskissbankbank.goalMonthReached
        state.status = 'loaded'
    },
    ['ERROR_LOAD_KISSKISSBANKBANK'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}