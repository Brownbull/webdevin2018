const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

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
    ] // eof users
} // eof database

app.get('/', (req, res) => {
    res.send(database.users);
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password == database.users[0].password) {
        res.json('sucess');
    } else {
        res.status(404).json('error login in')
    }
}) // eof app.post('/signin'

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '789',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length - 1]);
})

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
            user.entries++;
            return res.json(user.entries);
        }
    }) // eof database.users.forEach
    if (!found) {
        res.status(400).json('no such user');
    }
})

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