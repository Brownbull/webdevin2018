const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    // version: '7.2',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '928236543',
        database: 'smart-brain'
    }
});

// db.select('*').from('local.users').then(data => {
//     console.log(data);
// });

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(db.select('*').from('local.users').then(data => data));
})

app.post('/signin', (req, res) => {
    db.select('email', 'hash').from('local.login')
    .where('email', '=', req.body.email)
    .then(data => {
        const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
        if (isValid){
            return db.select('*').from('local.users')
            .where('email', '=', req.body.email)
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('Unable to get user'))
        } else {
            res.status(400).json('Wrong Credentials');
        }
    })
    .catch(err => res.status(400).json('Wrong Credentials'))
}) // eof app.post('/signin'

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('local.login')
        .returning('email')
        .then(loginEmail => {
            return trx('local.users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                joined: new Date()
            })
            .then(user => {
                res.json(user[0]);
            }) // eof return db
        }) // eof trx.insert
        .then(trx.commit)
        .catch(trx.rollback)
    }) // eof db.transaction
    .catch(err => res.status(400).json(err.detail))
}) // eof app.post('/register', (req, res) =>

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    db.select('*').from('local.users').where({id: id})
    .then(user => {
        if (user.length){
            res.json(user[0])
        } else {
            res.status(400).json("Not found")
        }   
    })
    .catch(err => res.status(400).json('Error getting user'))
}) // eof app.get('/profile/:id

app.put('/image', (req, res) => {
    const { id } = req.body;
    db('local.users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]); 
    })
    .catch(err => res.status(400).json('unable to get entries'))    
})



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function (err, res) {
//     // res == true
// });
// bcrypt.compare("veggies", hash, function (err, res) {
//     // res = false
// });

// LISTEN
app.listen(3000, () => {
    console.log('Server Started...');
})



/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user
*/