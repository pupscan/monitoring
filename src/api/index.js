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
            HTTP.get('/indiegogo/collect/month/current'),
            HTTP.get('/indiegogo/collect/month/total'),
            HTTP.get('/indiegogo/backers'),
            HTTP.get('/indiegogo/backers/month'),
            HTTP.get('/indiegogo/goal/month'),
            HTTP.get('/indiegogo/reached/month'),
        ]).then(data => ({
            collect: data[0].data.current,
            collectMonth: data[1].data,
            collectMonthCurrent: data[2].data,
            collectTotalMonth: data[3].data,
            backers: data[4].data.current,
            backersMonth: data[5].data,
            goalMonth: data[6].data,
            goalMonthReached: data[7].data,
        }))
    },
    kisskissbankbank: () => {
        return Promise.all([
            HTTP.get('/kkbb/collect'),
            HTTP.get('/kkbb/collect/month'),
            HTTP.get('/kkbb/collect/month/current'),
            HTTP.get('/kkbb/collect/month/total'),
            HTTP.get('/kkbb/backers'),
            HTTP.get('/kkbb/backers/month'),
            HTTP.get('/kkbb/goal/month'),
            HTTP.get('/kkbb/reached/month'),
        ]).then(data => ({
            collect: data[0].data.current,
            collectMonth: data[1].data,
            collectMonthCurrent: data[2].data,
            collectTotalMonth: data[3].data,
            backers: data[4].data.current,
            backersMonth: data[5].data,
            goalMonth: data[6].data,
            goalMonthReached: data[7].data,
        }))
    },
}