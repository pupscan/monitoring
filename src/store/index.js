import Vue from 'vue'
import Vuex from 'vuex'
import totalFund from './modules/total-fund'
import * as actions from './actions'
import logger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    modules: {
        totalFund
    },
    strict: debug,
    plugins: debug ? [logger()] : []
})