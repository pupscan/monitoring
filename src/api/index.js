import HTTP from './axios'

export default {
    totalFund: () => HTTP.get('/crowdfunding/collect').then(response => response.data.current),
    totalBacker: () => HTTP.get('/crowdfunding/backers').then(response => response.data.current),
    twitter: () => {
        return Promise.all([
            HTTP.get('/twitter/favorites'),
            HTTP.get('/twitter/followers'),
            HTTP.get('/twitter/last')
        ]).then(data => ({likes: data[0].data.current, followers: data[1].data.current, last: data[2].data}))
    },
    facebook: () => {
        return Promise.all([
            HTTP.get('/facebook/favorites'),
            HTTP.get('/facebook/followers'),
            HTTP.get('/facebook/last')
        ]).then(data => ({likes: data[0].data.current, favorites: data[1].data.current, last: data[2].data}))
    },
    indiegogo: () => {
        return Promise.all([
            HTTP.get('/indiegogo/collect'),
            HTTP.get('/indiegogo/collect/month'),
            HTTP.get('/indiegogo/collect/month/total'),
            HTTP.get('/indiegogo/backers'),
            HTTP.get('/indiegogo/backers/month'),
            HTTP.get('/indiegogo/goal/month'),
            HTTP.get('/indiegogo/reached/month'),
        ]).then(data => ({
            collect: data[0].data.current,
            collectMonth: data[1].data,
            collectTotalMonth: data[2].data,
            backers: data[3].data.current,
            backersMonth: data[4].data,
            goalMonth: data[5].data,
            goalMonthReached: data[6].data,
        }))
    },
}