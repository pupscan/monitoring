import axios from 'axios'

// const apiBaseUrl = process.env.API !== 'http://api.metric.pupscan.com/'

export default axios.create({baseURL: 'http://api.metric.pupscan.com/'})