const news = require('./newsapi')

/**
 * This is a basic hello function.
 *
 * @param {Object} event - HTTP event
 * @return {JSON} HTTP response JSON obj
 *
 */
module.exports.hello = async (event, ctx, cb) => {
  cb(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  })
}

/**
 * This function fetches articles based on query passed to it
 *
 * @param {Object} event - HTTP event
 * @return {JSON} HTTP response JSON obj
 *
 */
module.exports.fetchArticles = async (event, ctx, cb) => {
  // eslint-disable-next-line no-console
  console.log(event.queryStringParameters.type, JSON.parse(event.body))
  await news
    .fetchArticles(event.queryStringParameters.type, JSON.parse(event.body))
    .then((articles) =>
      cb(null, {
        statusCode: 200,
        body: JSON.stringify(
          {
            articles,
          },
          null,
          2
        ),
      })
    )
}
