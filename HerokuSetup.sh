# Heroku Setup to deploy smartbrain
# Requirements: Heroku Acct, Git, Heroku CLI and login on CLI

$ cd path/to/app
$ git init
$ heroku create
# get heroku-name-01   : ⬢ pure-inlet-46062
$ git remote -v
# need add heroku as a remote  
$ heroku git:remote -a heroku-name-01
$ heroku git:remote -a pure-inlet-46062
$ git remote -v
# should have heroku now
$ git push heroku master

# check what is happening
$ heroku logs --tail

# DATABASE
# go to left top menu -> Data}
# pick db: postgresql
# install postgres on your app
# Hobby Dev

# go to console
$ heroku addons
$ heroku pg:info
# connectto DATABASE
$ heroku pg:psql
# you can send querys

# setup server.js
// database
const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_URL,
        ssl:true
    }
});