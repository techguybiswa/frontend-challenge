# News API app

##  Quickstart dev

1. To run the backend service - written using the Serverless framework:
   1. `cd news-service`
   2. set up your API key in the `.env` file `NEWS_API_KEY={{ your api key }}`
   3. Run `sls offline start --stage dev`
2. To run the front-end app - written in VueJS:
   1. `cd news-app`
   2. In `news-app` - `.env`:
        ```
        NODE_ENV=development
        VUE_APP_SERVICE_URL_development=http://localhost:3000
        VUE_APP_SERVICE_KEY_development=
        ```
   3. Run `yarn serve`

