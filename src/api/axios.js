import axios from 'axios'

const apiBaseUrl = process.env.API_BASE_URL || 'http://api.metric.pupscan.com/'

export default axios.create({baseURL: apiBaseUrl})