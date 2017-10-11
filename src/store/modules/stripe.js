import stats from '../../api'


const state = {
    collect: 0,
    collectMonth: {labels: [], data: []},
    collectMonthCurrent: {labels: [], data: []},
    collectTotalMonth: 0,
    backers: 0,
    backersMonth: {labels: [], data: []},
    goalMonth: 0,
    goalMonthReached: 0,
    status: 'loaded',
}

const getters = {
    stripeCollect: state => state.collect,
    stripeCollectTotalMonth: state => state.collectTotalMonth,
    stripeBackers: state => state.backers,
    stripeStatus: state => state.status,
}

const actions = {
    fetchStripe({commit}) {
        commit('FETCH_STRIPE')
        stats.stripe()
            .then(stripe => commit('UPDATE_STRIPE', {stripe}))
            .catch(reason => commit('ERROR_LOAD_STRIPE', reason))
    }
}

const mutations = {
    ['FETCH_STRIPE'](state) {
        state.status = 'loading'
    },
    ['UPDATE_STRIPE'](state, {stripe}) {
        state.collect = stripe.collect
        state.collectTotalMonth = stripe.collectTotalMonth
        state.backers = stripe.backers
        state.status = 'loaded'
    },
    ['ERROR_LOAD_STRIPE'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}