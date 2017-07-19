import HTTP from './axios'

export default {
    totalFund: () => HTTP.get('/crowdfunding/collect').then(response => response.data.current),
    totalBacker: () => HTTP.get('/crowdfunding/backers').then(response => response.data.current)
}