/* eslint-disable no-console */
require('dotenv').config()
const NewsAPI = require('newsapi')

const newsapi = new NewsAPI(process.env.NEWS_API_KEY).v2

module.exports.headlines = async (params) => newsapi.topHeadlines(params)

module.exports.everything = async (params) => newsapi.everything(params)

module.exports.fetchArticles = async (type, params) => {
  switch (type) {
    case 'headlines':
      return exports
        .headlines(params)
        .then((data) => {
          console.log('found: ', data.totalResults)
          return data.articles
        })
        .catch((e) => console.error(e))
    case 'search':
      return exports
        .everything(params)
        .then((data) => {
          console.log('found: ', data.totalResults)
          return data.articles
        })
        .catch((e) => console.error(e))
    default:
      console.log('none')
      break
  }
}
