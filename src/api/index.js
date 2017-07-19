import HTTP from './axios'

export default {
    totalFund: () => HTTP.get('/crowdfunding/collect').then(response => response.data.current),
    totalBacker: () => HTTP.get('/crowdfunding/backers').then(response => response.data.current),
    twitter: () => {
        return Promise.all([
            HTTP.get('/twitter/favorites'),
            HTTP.get('/twitter/followers')
        ]).then(data => ({likes: data[0].data.current, followers: data[1].data.current}))
    },
    facebook: () => {
        return Promise.all([
            HTTP.get('/facebook/favorites'),
            HTTP.get('/facebook/followers')
        ]).then(data => ({likes: data[0].data.current, favorites: data[1].data.current}))
    }
}