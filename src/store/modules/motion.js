import stats from '../../api'


const state = {
    collect: 0,
    collectTotalMonth: 0,
    backers: 0,
    status: 'loaded',
}

const getters = {
    motionCollect: state => state.collect,
    motionCollectTotalMonth: state => state.collectTotalMonth,
    motionBackers: state => state.backers,
    motionStatus: state => state.status,
}

const actions = {
    fetchMotion({commit}) {
        commit('FETCH_MOTION')
        stats.motion()
            .then(motion => commit('UPDATE_MOTION', {motion}))
            .catch(reason => commit('ERROR_LOAD_MOTION', reason))
    }
}

const mutations = {
    ['FETCH_MOTION'](state) {
        state.status = 'loading'
    },
    ['UPDATE_MOTION'](state, {motion}) {
        state.collect = motion.collect
        state.collectTotalMonth = motion.collectTotalMonth
        state.backers = motion.backers
        state.status = 'loaded'
    },
    ['ERROR_LOAD_MOTION'](state) {
        state.status = 'error'
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}