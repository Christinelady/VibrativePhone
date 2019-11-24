const path = require('path');

const ip = require('ip');
const Express = require('express');
const app = new Express();

const port = 8080;

app.use('/static', Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running. Open up http://localhost:${ port }`);
    console.log(`Open up http://${ ip.address() }:${ port } on your phone`);
})