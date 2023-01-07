# Getting started
- install node.js which includes npm from: https://nodejs.org/en/download/
- get the repo `git clone https://github.com/unliketea/PuugPersonalWebShbb` 
- inside the checkout, install packages: `npm install`
- install required global packages: 
    - `npm install -g firebase-tools`
    - `npm install -g gatsby-cli`
- login or reauth: `firebase login` or `firebase login --reauth`
- define a few variables in `functions/.runtimeconfig.json`:
    - sendgrid -> settings -> api keys -> create api key: `sendgrid.api_key` 
    - sendgrid -> sender authentication -> domain authentication: `sendgrid.contact.recipient`
    - *tip: (if you have already setup these in the past, you can retrieve production secrets with `firebase functions:config:get`)*
- define a few variables in `.env`: 
    - from firebase console; Project settings -> Project ID: `GATSBY_FIREBASE_PROJECT_ID`
- for local development, run: `gatsby develop`
- to test ssr first build (`gatsby build`) then use: `firebase emulators:start`

# Deploying
- firebase hosting is handled via a github action on push, which needs a few secrets defined (at Settings -> Secrets -> Actions)
    - run `firebase init hosting`, part of which will create FIREBASE_SERVICE_ACCOUNT_&lt;Project ID&gt;
    - from firebase console; Project settings -> Web API Key: `GATSBY_FIREBASE_API_KEY`
- deploy firebase functions with `firebase deploy --only functions`
    - New https callable function require permissions for `allUsers` as `Function Invoker` at: https://console.cloud.google.com/functions/list?project=puugpersonalwebru
- ensure you've installed any latest npm updates before pushing with: `npm install`

# Configuration
- github -> settings -> secrets -> repository secrets
- firebase cli -> `firebase functions:config:set some.secret="value" another.secret="value"`

# Website URL
https://southhillbreadbox.com/