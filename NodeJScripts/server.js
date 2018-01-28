const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'));

// middleware
// app.use((req, res, next) => {
//     console.log("Hiiiii");
//     next();
// })
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// app.get('/', (req, res) => {
    
//     // req.body , req.header, req.params, req. query
//     // res.status(404).send("not found")
//     res.send("root")
// });
    
// app.get('/profile', (req, res) => {
//     res.send("getting profile")
// });

// app.post('/', (req, res) => {
//     const user = {
//         name: 'Gabriel',
//         hobby: 'Coding'
//     }
//     res.send(user)
// });

// LISTEN
app.listen(3000);