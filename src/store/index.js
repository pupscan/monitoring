import Vue from 'vue'
import Vuex from 'vuex'
import totalFund from './modules/total-fund'
import totalBacker from './modules/total-backer'
import twitter from './modules/twitter'
import facebook from './modules/facebook'
import indiegogo from './modules/indiegogo'
import * as actions from './actions'
import logger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    modules: {
        totalFund,
        totalBacker,
        twitter,
        facebook,
        indiegogo,
    },
    strict: debug,
    plugins: debug ? [logger()] : []
})