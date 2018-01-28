const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('Server Started...');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    const user = {
        name: 'Gabriel',
        hobby: 'Coding'
    }

    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(user));
})

server.listen(3000);