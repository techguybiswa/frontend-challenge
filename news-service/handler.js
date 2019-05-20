'use strict';
const news = require('./newsapi');

/**
 * This is a function.
 *
 * @param {Object} event - HTTP event
 * @return {JSON} HTTP response JSON obj
 * 
 */
module.exports.hello = async (event, ctx, cb) => {
  cb(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  });
};

module.exports.fetchArticles = async (event, ctx, cb) => {
  console.log(event.queryStringParameters.type, JSON.parse(event.body))
  await news.fetchArticles(event.queryStringParameters.type, JSON.parse(event.body))
    .then(articles => cb(null, {
      statusCode: 200,
      body: JSON.stringify({
        articles
      }, null, 2),
    }))
};