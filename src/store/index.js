import Vue from 'vue'
import Vuex from 'vuex'
import totalFund from './modules/total-fund'
import totalFundMonth from './modules/total-fund-month'
import totalBacker from './modules/total-backer'
import twitter from './modules/twitter'
import facebook from './modules/facebook'
import indiegogo from './modules/indiegogo'
import stripe from './modules/stripe'
import motion from './modules/motion'
import kisskissbankbank from './modules/kisskissbankbank'
import gitlab from './modules/gitlab'
import * as actions from './actions'
import logger from './plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    modules: {
        totalFund,
        totalFundMonth,
        totalBacker,
        twitter,
        facebook,
        indiegogo,
        kisskissbankbank,
        gitlab,
        stripe,
        motion,
    },
    strict: debug,
    plugins: debug ? [logger()] : []
})