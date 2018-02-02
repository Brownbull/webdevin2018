// libs
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

// routes
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// ENV vars
const PORT = process.env.PORT || 3000;

let db = knex({
    client: 'pg',
    conection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
})
// database
if (process.env.DATABASE_URL) {
    db = knex({
        client: 'pg',
        conection: {
            connectionString: process.env.DATABASE_URL,
            ssl: true
        }
    })
} else {
    db = knex({
        client: 'pg',
        conection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: '928236543',
            database: 'smart-brain'
        }
    })
}

// calls
const app = express();
app.use(bodyParser.json());
app.use(cors());

// RESTful
app.get('/', (req, res) => { res.send('it is working!')});
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)}) // eof app.post('/signin'
app.post('/register', (req,res) => {register.handleRegister(req, res, db, bcrypt)}) // eof app.post('/register', (req, res) =>
app.get('/profile/:id', (req, res) => {profile.handleProfile(req, res, db)}) // eof app.get('/profile/:id
app.put('/image', (req, res) => {image.handleImage(req, res, db)}) // eof app.put('/image'
app.post('/imageurl', (req, res) => {image.handleAPICall(req, res)}) // eof app.put('/image'

// LISTEN
app.listen(PORT, () => {
    console.log(`Server Started, listen on PORT ${PORT}`);
})