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

db.select('*').from('local.users').then(data => {
    console.log(data);
});



const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'asd',
            email: 'asd@lala.com',
            password: 'asd',
            entries: 0,
            joined: new Date()
        },
        {
            id: '456',
            name: 'zxc',
            email: 'zxc@lala.com',
            password: 'zxc',
            entries: 0,
            joined: new Date()
        }
    ], // eof users
    login: [
        {
            id: '987',
            hash: '',
            email: 'fgh@lala.com'
        }
    ]
} // eof database

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password == database.users[0].password) {
        res.json(database.users[0]);
    } else {
        res.status(400).json('error login in')
    }
}) // eof app.post('/signin'

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    // bcrypt.hash(password, null, null, function (err, hash) {
    //     // Store hash in your password DB.
    //     console.log(hash);
        
    // });
    // database.users.push({
    //     id: '789',
    //     name: name,
    //     email: email,
    //     password: password,
    //     entries: 0,
    //     joined: new Date()
    // })
    db('local.users').insert({ 
        email: email,
        name: name,
        joined: new Date()
     }).then(console.log);
    res.json(database.users[database.users.length - 1]);
}) // eof app.post('/register', (req, res) =>

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id){
            found = true;
            return res.json(user);
        } 
    }) // eof database.users.forEach
    if (!found) {
        res.status(400).json('no such user');
    }
}) // eof app.get('/profile/:id

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    }) // eof database.users.forEach
    if (!found) {
        res.status(400).json('no such user');
    }
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