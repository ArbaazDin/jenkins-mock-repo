const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.status(200).json({
        status : "SUCCESS",
        message : 'Good Morning!!'
    })
    return;
});

app.get('/hello', (req, res) => res.status(200).send('Hello Hi!!'));


app.listen(port);
console.log(`App running on http://localhost:${port}`);
