# Heroku Setup to deploy smartbrain
# Requirements: Heroku Acct, Git, Heroku CLI and login on CLI

$ cd path/to/app
$ heroku create
# get heroku-name-01   : ⬢ thawing-taiga-22532
$ git remote -v
# need add heroku as a remote  
$ heroku git remote -a heroku-name-01
$ git remote -v
# should have heroku now
$ git push heroku master

# check what is happening
$ heroku logs --tail