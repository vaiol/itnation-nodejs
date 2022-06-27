const express = require('express');
const app = express();

const port = 3030


app.use(express.json());

app.post('/', (req, res) => {
    const body = req.body;
    if (body) {
        body.hello = "Hello Everyone"
    }
    res.json(body);
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/itnation', (req, res) => {
    res.send('Hello Itnation!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})