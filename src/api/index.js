import HTTP from './axios'

export default {
    totalFund: () => HTTP.get('/crowdfunding/collect').then(response => response.data.current)
}